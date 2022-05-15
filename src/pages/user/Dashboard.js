import React from "react";
import Navbar from "../../components/general/Navbar";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SignLanguageIcon from "@mui/icons-material/SignLanguage";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { useNavigate } from "react-router-dom";
// Images are from https://undraw.co/, material ui, and https://app.haikei.app/

function Dashboard() {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col w-screen h-screen items-center">
      <Navbar />
      <div className="flex flex-col h-[93vh] w-[90vw]">
        <div className="flex mt-2 mb-4">
          <div className="text-5xl font-extrabold w-full border-b-4 border-black">
            Your Dashboard
          </div>
        </div>
        <div className="flex h-[80vh] w-full justify-between">
          <div className="w-full h-[60vh]">
            <button
              className="flex text-6xl font-extrabold w-full h-[18vh] mr-4 items-center bg-[url('images/new-meeting.svg')] rounded-3xl shadow-lg mb-4"
              onClick={() => {
                navigate("/meeting");
              }}
            >
              <VideoCallIcon className="ml-4" style={{ fontSize: 75 }} />
              <p className="flex ml-2 h-full items-center bg-[#F7770F]">
                New Meeting
              </p>
            </button>
            <button
              className="flex text-6xl font-extrabold w-full h-[18vh] mr-4 items-center bg-[url('images/join-meeting.svg')] rounded-3xl shadow-lg mb-4"
              onClick={() => {
                navigate("/meeting");
              }}
            >
              <AddCircleOutlineIcon className="ml-4" style={{ fontSize: 75 }} />
              <p className="flex ml-2 h-full items-center">Join Meeting</p>
            </button>
            <button
              className="flex text-6xl font-extrabold w-full h-[18vh] mr-4 items-center bg-[url('images/asl-config.svg')] rounded-3xl shadow-lg mb-4"
              onClick={() => {
                navigate("/training");
              }}
            >
              <SignLanguageIcon className="ml-4" style={{ fontSize: 75 }} />
              <p className="flex ml-2 h-full items-center bg-[#715DF2]">
                ASL Configuration
              </p>
            </button>
            <button
              className="flex text-6xl font-extrabold w-full h-[18vh] mr-4 items-center bg-[url('images/accessibility.svg')] rounded-3xl shadow-lg mb-4"
              onClick={() => {
                navigate("/setup");
              }}
            >
              <div className="flex h-full items-center bg-[#A8A89E] rounded-3xl">
                <AccessibilityNewIcon
                  className="ml-4 bg-[#A8A89E]"
                  style={{ fontSize: 75 }}
                />
                <p className="flex ml-4 h-full items-center bg-[#A8A89E]">
                  Accessibility
                </p>
              </div>
            </button>
          </div>
          <div className="flex items-center">
            <img className="ml-8 h-[60vh]" src="../../dashboard_image.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
