import React, { useState } from "react";

function Sidebar() {

  return (
    <div>
      <div>
        <button
          onClick={() => {
            alert("button clicked");
            // setSidebarWidth(250);
          }}
        >
          Increase width
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
