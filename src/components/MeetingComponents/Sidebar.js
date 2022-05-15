import { SignLanguage, BrightnessHigh, Contrast } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  let navigate = useNavigate();

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
          onClick={() => {}}
        />
        <Contrast
          className="mt-4"
          style={{ fontSize: 50 }}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default Sidebar;
