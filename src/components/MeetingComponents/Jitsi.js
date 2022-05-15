import React, { useEffect, useRef } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import createDetector from "../TensorflowComponents/HandModel";

function Jitsi(props) {
  // https://itnext.io/accessing-the-webcam-with-javascript-and-react-33cbe92f49cb
  const videoRef = useRef(null);

  async function getHandsData(detector) {
    const predictions = await detector.estimateHands(videoRef.current, {
      flipHorizontal: false,
    });

    if (predictions) {
      if (predictions.length > 0) {
//        console.log(predictions)
//        for (let i = 0; i < predictions.length; i++) {
          console.log(predictions[0].score)
          // const keypoints = predictions[i].keypoints3D;

          // Log hand keypoints.
          // for (let i = 0; i < keypoints.length; i++) {
          //   const [x, y, z] = keypoints[i];
          //   console.log(`Keypoint ${i}: [${x}, ${y}, ${z}]`);
          // }
//        }
      }
    }

    // https://web.dev/requestvideoframecallback-rvfc/
    videoRef.current.requestVideoFrameCallback(() => {
      getHandsData(detector);
    });
  }

  useEffect(() => {
    createDetector().then((detector) => {
      videoRef.current.addEventListener(
        "play",
        function () {
          videoRef.current.requestVideoFrameCallback(() => {
            getHandsData(detector);
          });
        },
        false
      );
      getVideo();
    });
  }, []);

  // Gets video stream from the webcam and plays it on the video element
  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  //
  return (
    <div>
      {/* TODO: nodejs server with jwt */}
      {/* <JaaSMeeting
            appId={""}
            jwt={JWT}
            roomName={"YOUR_CUSTOM_ROOM_NAME"}
          /> */}

      {/* https://jitsi.org/blog/introducing-the-jitsi-meet-react-sdk/ */}
      <div>
        <JitsiMeeting
          roomName="test-room"
          getIFrameRef={(node) => {
            // hacky way to get the height as a string in pixels
            node.style.height = (window.innerHeight * 15) / 16 + "px";

            if (props.cameraWidth) {
              node.style.width = props.cameraWidth + "px";
            } else {
              node.style.width = window.innerWidth + "px";
            }
          }}
        />
        <video ref={videoRef} />
      </div>
    </div>
  );
}

export default Jitsi;
