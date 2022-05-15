import React, { useEffect, useRef } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

function Jitsi(props) {
  // Hack to always reload upon entry and initialize Jitsi
  useEffect(() => {
    if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }
  }, []);

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
            if (props.cameraHeight) {
              node.style.height = props.cameraHeight*15/16 + "px";
            } else {
              node.style.height = window.innerHeight*15/16 + "px";
            }

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
