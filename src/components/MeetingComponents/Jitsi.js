import React, { useEffect, useRef } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

function Jitsi(props) {
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
