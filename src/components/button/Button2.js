import colors from "../../constants/colors";
import React, { useState, useEffect } from "react";
import endpoints from "../../constants/endpoints";

export default function Button(props) {
  const [clickCount, setClickCount] = useState(0);
  const [user, setUser] = useState(null);
  const handleClick = () => {
    setClickCount(clickCount + 1);
    getData();
  };

  const getData = () => {
    fetch(endpoints.URL)
      .then((res) => res.json())
      .then((json) => setUser(json));
    /*
    Sample response:
    {
      "id": 1,
      "name": "Zafer AYAN"
    }
    */
  };

  return (
    <button
      style={{
        background: "none",
        backgroundColor: colors.PETER_RIVER.hex,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 12,
        paddingRight: 12,
        color: "#fff",
      }}
      onClick={handleClick}
      {...props}
    >
      {props.text}
      {clickCount === 0 ? "" : ` ${clickCount}`}
      {user && ` ${user.name}`}
    </button>
  );
}
