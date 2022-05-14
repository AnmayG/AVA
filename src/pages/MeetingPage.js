import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/general/Navbar";
import Jitsi from "../components/MeetingComponents/Jitsi";
import Sidebar from "../components/MeetingComponents/Sidebar";

function MeetingPage() {
  const jitsiRef = useRef(null);
  const [jitsiWidth, setJitsiWidth] = useState(null);
  const [sidebarWidth, setSidebarWidth] = useState(300);
  useEffect(() => {
    setJitsiWidth(jitsiRef.current ? jitsiRef.current.clientWidth : null);
    return () => {};
  }, [jitsiRef.current]);

  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col h-screen w-screen">
        <Navbar />
        <div className="flex w-full h-full">
          <div className="w-full" ref={jitsiRef}>
            <Jitsi cameraWidth={jitsiWidth} />
          </div>
          <div
            // className={`h-full w-[${
            //   sidebarWidth ? sidebarWidth : 100
            // }px]`}
            className="h-full w-[300px]"
          >
            <Sidebar sidebarWidth={sidebarWidth} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingPage;
