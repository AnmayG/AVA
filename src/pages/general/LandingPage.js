import React, { useEffect, useRef } from "react";
import Navbar from "../../components/general/Navbar";
import { Link, useNavigate } from "react-router-dom";
import Typed from "typed.js";

function LandingPage() {
  let navigate = useNavigate();
  const grayRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(grayRef.current, {
      strings: [
        "unheard.",
        "unseen.",
        "unhelped.",
        "unwanted.",
        "unguided.",
        "unproven.",
      ],
      shuffle: true,
      loop: true,
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: false,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex flex-col h-[93vh] w-full justify-between">
        <div className="flex h-[80vh] font-bold text-6xl items-center justify-between">
          <div className="ml-4">
            <div className="mb-4">
              Meet
              <img
                src="../../ava-logo.svg"
                className="h-100 inline align-text-bottom"
                onClick={() => {
                  navigate("/");
                }}
                alt="Ava"
              />
            </div>
            <div>
              A new way to make sure that no student is ever left{" "}
              <p ref={grayRef} className="text-gray-300 inline">
                unheard
              </p>
            </div>
            <div className="flex">
              <Link
                style={{ textDecoration: "none" }}
                className="mt-8 mr-4 w-fit justify-center text-4xl text-center font-bold text-black rounded-3xl p-2 px-8 outline"
                to="/login"
              >
                Log In
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="mt-8 w-fit justify-center text-4xl text-center bg-green-800 font-bold text-white rounded-3xl p-2 px-8"
                to="/signup"
              >
                Get Started
              </Link>
            </div>
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
