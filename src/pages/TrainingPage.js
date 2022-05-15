import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/general/Navbar";
import * as tf from "@tensorflow/tfjs";
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import * as mobilenetModule from "@tensorflow-models/mobilenet";
import * as knnClassifier from "@tensorflow-models/knn-classifier";
import Webcam from "react-webcam";
import { drawHand } from "../components/TensorflowComponents/utilities";

function TrainingPage() {
  const phrase = "Hello, my name is ANMAY";
  const phraseArray = ["Hello", "my", "name", "is", "A", "N", "M", "A", "Y"];
  const [training, setTraining] = useState(-1);

  const infoTexts = [];
  let classifier;
  let mobilenet;

  // Number of classes to classify
  const NUM_CLASSES = phraseArray.length;

  // K value for KNN
  const TOPK = 3;

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runHandpose = async () => {
    // const net = await handpose.load();
    const model = handPoseDetection.SupportedModels.MediaPipeHands;
    const detectorConfig = {
      runtime: "mediapipe", // or 'tfjs',
      solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/hands",
      modelType: "full",
    };
    const net = await handPoseDetection.createDetector(model, detectorConfig);

    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 100);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);

      // Get image data from video element
      const image = tf.browser.fromPixels(video);
      let logits;
      // 'conv_preds' is the logits activation of MobileNet.
      const infer = () => mobilenet.infer(image, "conv_preds");

      // Train class if one of the buttons is held down
      if (training != -1) {
        logits = infer();
        // Add current image to classifier
        classifier.addExample(logits, training);

        // Reset the training bit so we only collect during clicks.
        setTraining(-1);
      }

      // If the classifier has examples for any classes, make a prediction!
      const numClasses = classifier.getNumClasses();
      if (numClasses > 0) {
        logits = infer();

        const res = await classifier.predictClass(logits, TOPK);
        for (let i = 0; i < NUM_CLASSES; i++) {
          // Make the predicted class bold
          if (res.label == `${i}`) {
            alert(i);
            infoTexts[i].style.fontWeight = "bold";
          } else {
            alert(i);
            infoTexts[i].style.fontWeight = "normal";
          }

          const classExampleCount = classifier.getClassExampleCount();
          // Update info text
          if (classExampleCount[i] > 0) {
            const conf = res.confidences[i] * 100;
            alert(` ${classExampleCount[i]} examples - ${conf}%`);
            // infoTexts[
            //   i
            // ].innerText = ` ${classExampleCount[i]} examples - ${conf}%`;
          }
        }
      }

      image.dispose();
      if (logits != null) {
        logits.dispose();
      }

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);
    }
  };

  useEffect(() => {
    const start = async function () {
      classifier = knnClassifier.create();
      mobilenet = await mobilenetModule.load();
      runHandpose();
    };
    start();
    return () => {};
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        <div>
          <Webcam
            ref={webcamRef}
            style={{
              position: "absolute",
              zindex: 9,
              top: 10,
              left: 0,
              width: 640,
              height: 480,
            }}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              zindex: 9,
              top: 10,
              left: 0,
              width: 640,
              height: 480,
            }}
          />
        </div>
        <div className="w-[1040px] h-[400px]">spacer</div>
        <div className="mr-6 w-full font-bold text-2xl">
          Welcome to Ava Training: a method to configure and train a custom
          neural network catered to your sign language. We'll have you sign a
          few testing phrases to train your AI so that you can begin signing
          within your calls.
          <div className="flex justify-center w-full h-full text-center mt-8">
            Please sign the phrase: {phrase}, holding the button below each word
            or letter to indicate which one you are signing.
          </div>
        </div>
      </div>
      <div className="flex h-[40vh]">
        {phraseArray.map((letter, index) => {
          return (
            <div className="w-[10vw] h-full ml-4 bg-white">
              <p className="mt-4 mb-8 text-2xl text-center font-extrabold">
                {letter}
              </p>
              <button
                className="border-black border text-xl text-center mx-4 p-4"
                onClick={() => {
                  setTraining(index);
                }}
              >
                Record Samples
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TrainingPage;
