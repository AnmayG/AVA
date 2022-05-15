import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/general/Navbar";
import Jitsi from "../components/MeetingComponents/Jitsi";
import Sidebar from "../components/MeetingComponents/Sidebar";
import Handsfree from "../components/TensorflowComponents/HandModel";

function MeetingPage() {
  const jitsiRef = useRef(null);
  const [jitsiWidth, setJitsiWidth] = useState(null);
  const [sidebarWidth, setSidebarWidth] = useState(300);

  useEffect(() => {
    setJitsiWidth(jitsiRef.current ? jitsiRef.current.clientWidth : null);
    return () => {};
  }, [jitsiRef.current]);

  useEffect(() => {
    // Handsfree.start();
    
    return () => {};
  }, []);

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
    <div className="h-screen w-screen">
      <div className="flex flex-col h-screen w-screen">
        <Navbar />
        {/* <p>
          <button
            className="handsfree-show-when-stopped handsfree-hide-when-loading"
            onClick={startHandsfree}
          >
            Start handsfree
          </button>
          <button className="handsfree-show-when-loading">...loading...</button>
          <button
            className="handsfree-show-when-started"
            onClick={stopHandsfree}
          >
            Stop handsfree
          </button>
        </p> */}
        <div className="flex w-full h-full">
          <div className="w-full" ref={jitsiRef}>
            <Jitsi cameraWidth={jitsiWidth} />
          </div>
          <div
            // className={`h-full w-[${
            //   sidebarWidth ? sidebarWidth : 100
            // }px]`}
            className="h-full w-[75px]"
          >
            <Sidebar sidebarWidth={sidebarWidth} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingPage;
