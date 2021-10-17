import React from "react";
import "./textInput.css";

export default function TextInput(props) {
  return (
    <input
      defaultValue="zafer"
      className="my-input"
      type="text"
      onChange={props.onChange}
      {...props}
    />
  );
}
