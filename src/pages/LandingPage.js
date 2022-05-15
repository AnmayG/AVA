import React from "react";
import Navbar from "../components/general/Navbar";
import { Link, useNavigate } from "react-router-dom";

function LandingPage() {
  let navigate = useNavigate();

  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex flex-col h-[93vh] w-full justify-between">
        <div className="flex h-[80vh] font-bold text-6xl items-center justify-between">
          <div className="ml-4">
            <div className="">
              Meet
              <img
                src="../../ava-logo.svg"
                className="h-100 inline align-text-bottom"
                onClick={() => {
                  navigate("/");
                }}
                alt="Ava"
              />
              :
            </div>
            <div>A new way to make sure that no student is left <p className="text-gray-400 inline">unheard.</p></div>
            <button
              style={{ textDecoration: "none" }}
              className="mt-8 mr-4 w-fit justify-center text-4xl text-center font-bold rounded-3xl p-2 px-4 outline"
              onClick={() => {
                navigate("/meeting");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      <img
        src="../../layered-waves-cropped.svg"
        className="w-full"
        onClick={() => {
          navigate("/");
        }}
        alt="Ava"
      />
      </div>
    </div>
  );
}

export default LandingPage;
