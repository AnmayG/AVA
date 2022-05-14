import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";

// Imports tensorflow hand pose model for tfjs lite
const model = handPoseDetection.SupportedModels.MediaPipeHands;
const detectorConfig = {
  runtime: "tfjs", // or 'tfjs'
  modelType: "lite",
};

// Create a detector based on the model and detector
detector = await handPoseDetection.createDetector(model, detectorConfig);

// Export for outside usage
export default detector;