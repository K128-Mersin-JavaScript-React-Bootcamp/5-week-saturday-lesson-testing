import React from "react";

export default function List(props) {
  if (!props.items) return <span>No data found</span>;

  return (
    <ul>
      {props.items.map((v) => (
        <li key={v.id}>{v.name}</li>
      ))}
    </ul>
  );
}
