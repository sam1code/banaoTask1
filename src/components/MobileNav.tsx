import React from "react";
import IMobileNav from "./types/index";

const MobileNav = ({ PostCount }: IMobileNav) => {
  return (
    <div className="d-flex justify-content-between mt-2 mx-3">
      <b>posts({PostCount || 0})</b>
      <select
        style={{
          backgroundColor: "#EDEEF0",
          border: "none",
          padding: ".3rem",
          borderRadius: "5px",
        }}
      >
        <option value="volvo">filter:All</option>
      </select>
    </div>
  );
};

export default MobileNav;
