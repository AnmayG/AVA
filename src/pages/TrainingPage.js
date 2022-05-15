import React from "react";
import Handsfree from "../components/TensorflowComponents/HandModel";

function TrainingPage() {
  function startHandsfree() {
    Handsfree.start();
    Handsfree.use("logger", (data) => {
      console.log(
        data.hands.landmarks[0],
        data.hands.landmarks[1],
        data.pose.poseLandmarks,
        data.facemesh.multiFaceLandmarks[0],
        this
      );
    });
  }

  function stopHandsfree() {
    Handsfree.stop();
  }
  return (
    <div>
      <p>
        <button
          className="handsfree-show-when-stopped handsfree-hide-when-loading"
          onClick={startHandsfree}
        >
          Start handsfree
        </button>
        <button className="handsfree-show-when-loading">...loading...</button>
        <button className="handsfree-show-when-started" onClick={stopHandsfree}>
          Stop handsfree
        </button>
      </p>
    </div>
  );
}

export default TrainingPage;
