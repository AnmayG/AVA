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
  setup: {
    video: {
      $el: document.querySelector("#handsfree-video")
    },
    canvas: {
      hands: {
        $el: document.querySelector("#handsfree-canvas")
      }
    }
  }
});

export default HandsfreeModel;
