import React from "react";
import "./ErrorPopup.css";
import { BiErrorAlt } from "@react-icons/all-files/bi/BiErrorAlt";

function ErrorPopup() {
  return (
    <>
      <div className="error-popup">
        <BiErrorAlt className="error-logo" />
        <p className="error-text">An error occured.</p>
      </div>
    </>
  );
}

export default ErrorPopup;
