import { SignLanguage, BrightnessHigh, Contrast } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();
  const [brightnessFilterOn, setBrightnessFilterOn] = useState(false);
  const [contrastFilterOn, setContrastFilterOn] = useState(false);

  return (
    <div className="bg-gray-100 h-full">
      <div className="flex flex-col items-center">
        <SignLanguage
          className="mt-4"
          style={{ fontSize: 50 }}
          onClick={() => {}}
        />
        <div
          className={
            "flex justify-center w-full mt-4 " +
            (brightnessFilterOn ? "bg-gray-500" : "")
          }
        >
          <BrightnessHigh
            style={{ fontSize: 50 }}
            onClick={() => {
              if (brightnessFilterOn) {
                document
                  .getElementById("jitsiConferenceFrame0")
                  .setAttribute(
                    "style",
                    "-webkit-filter:brightness(" + 100 + "%)"
                  );
                setBrightnessFilterOn(false);
              } else {
                document
                  .getElementById("jitsiConferenceFrame0")
                  .setAttribute(
                    "style",
                    "-webkit-filter:brightness(" + 50 + "%)"
                  );
                setBrightnessFilterOn(true);
              }
            }}
          />
        </div>

        <div
          className={
            "flex justify-center w-full mt-4 " +
            (contrastFilterOn ? "bg-gray-500" : "")
          }
        >
          <Contrast
            style={{ fontSize: 50 }}
            onClick={() => {
              if (contrastFilterOn) {
                document
                  .getElementById("jitsiConferenceFrame0")
                  .setAttribute("style", "-webkit-filter:invert(" + 0 + "%)");
                setContrastFilterOn(false);
              } else {
                document
                  .getElementById("jitsiConferenceFrame0")
                  .setAttribute("style", "-webkit-filter:invert(" + 100 + "%)");
                setContrastFilterOn(true);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
