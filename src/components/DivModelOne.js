import React from "react";
import "../index.css";

{
  /*  div alinhada a esquerda *>*/
}

export default function DivModelOne(props) {
  return (
    <div className="infortmation-div">
      <h5>{props.title}</h5>
      <p>{props.text}</p>
      <button>{props.button}</button>
    </div>
  );
}
