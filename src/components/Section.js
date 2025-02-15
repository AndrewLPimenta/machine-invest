import React from "react";
import "../index.css";

export default function Section(props) {
  return (
    <section className="section">
      <div className="section-content">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <button>{props.button}</button>
      </div>
      <img className="img-section" src={props.imgSrc} alt={props.imgAlt} />
    </section>
  );
}
