import React from "react";
import "../index.css"; // Importando o CSS externo

const Card = (props) => {
  return (
    <div className="card">
      <img
        alt={props.titulo}
        loading="lazy"
        width="440"
        height="286"
        decoding="async"
        className="card-image"
        src={props.imagem}
      />
      <h3 className="card-title">
        <span>
          <p>{props.subtitulo}</p>
        </span>
      </h3>
      <div className="card-description">
        <span>
          <p>{props.descricao}</p>
        </span>
      </div>
      <div className="card-link">
        <p>{props.botaoTexto}</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H18"
            stroke="black"
            strokeWidth="1.5"
            style={{ stroke: "#77f9e1" }}
          ></path>
          <path
            d="M12 5L19 12L12 19"
            stroke="black"
            strokeWidth="1.5"
            style={{ stroke: "#77f9e1" }}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Card;
