import React, { useEffect, useRef } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

function Jitsi(props) {
  // https://itnext.io/accessing-the-webcam-with-javascript-and-react-33cbe92f49cb
  useEffect(() => {
    getVideo();
    return () => {};
  }, []);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        // let video = videoRef.current;
        // video.srcObject = stream;
        // video.play();
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
      </div>
    </div>
  );
}

export default Jitsi;
