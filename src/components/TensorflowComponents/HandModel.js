// https://blog.tensorflow.org/2021/11/3D-handpose.html
import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import * as tf from "@tensorflow/tfjs-core";
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl";
import '@mediapipe/hands';

// Imports tensorflow hand pose model for tfjs lite
const model = handPoseDetection.SupportedModels.MediaPipeHands;
const detectorConfig = {
  modelType:"full", 
  runtime: 'tfjs-webgl',
};

// Create a detector based on the model and detector
async function createDetector() {
  const detector = await handPoseDetection.createDetector(model, detectorConfig);
  return detector;
}

// Export for outside usage
export default createDetector;
