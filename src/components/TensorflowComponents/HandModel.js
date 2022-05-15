import Handsfree from "handsfree";

const HandsfreeModel = new Handsfree({
  hands: {
    enabled: true,
    maxNumHands: 2,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  },
  pose: {
    enabled: true,
    upperBodyOnly: true,
    smoothLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5,
  },
  // facemesh: {
  //   enabled: true,
  //   maxNumFaces: 1,
  //   minDetectionConfidence: 0.5,
  //   minTrackingConfidence: 0.5,
  // },
});

export default HandsfreeModel;
