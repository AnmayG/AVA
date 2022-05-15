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
        <BrightnessHigh
          className="mt-4"
          style={{ fontSize: 50 }}
          onClick={() => {
            document
              .getElementById("jitsiConferenceFrame0")
              .setAttribute("style", "-webkit-filter:brightness(" + 50 + "%)");}}
        />
        <Contrast
          className="mt-4"
          style={{ fontSize: 50 }}
          onClick={() => {
            document
              .getElementById("jitsiConferenceFrame0")
              .setAttribute("style", "-webkit-filter:invert(" + 100 + "%)");
          }}
        />
      </div>
    </div>
  );
}

export default Sidebar;
