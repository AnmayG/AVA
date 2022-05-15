import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
// import { Settings, Logout, SwitchAccount } from "@mui/icons-material";

const Navbar = () => {
  // const [word, setWord] = useState("")
  const [image, setImage] = useState("");
  let navigate = useNavigate();

  return (
    <div className="flex w-full justify-between items-center lg:px-4 md:px-3 sm:px-2 h-[7vh] bg-white">
      <div className="flex justify-center items-center whitespace-nowrap">
        <img
          src="../../ava-logo.svg"
          className="h-10 mr-2"
          onClick={() => {
            navigate("/");
          }}
          alt=""
        ></img>
        <Link
          className="text-xl text-center font-bold cursor-pointer shrink-0 mr-8"
          style={{ textDecoration: "none" }}
          to="/"
        >
          A V A
        </Link>
      </div>
      {/* <div className="flex justify-evenly items-center whitespace-nowrap">
        Get Started
      </div> */}
    </div>
  );
};

export default Navbar;
