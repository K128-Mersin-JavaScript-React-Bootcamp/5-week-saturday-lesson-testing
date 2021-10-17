import colors from "../../constants/colors";
import React, { useState, useEffect } from "react";
import endpoints from "../../constants/endpoints";
import "./button.css";

export default function Button(props) {
  return (
    <button className="my-button" {...props}>
      {props.children}
    </button>
  );
}
