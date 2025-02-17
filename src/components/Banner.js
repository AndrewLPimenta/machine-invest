import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "../index.css";
import img from "../assets/banner-desk.jpg";
import imgMobile from "../assets/banner-mobile.jpg";
import { Animate } from "react-simple-animate";

export default function Banner() {
  const [play, setPlay] = useState(false);

  // Função chamada quando a animação é completada
  const onCompleteCallBack = () => {
    console.log("Animação concluída!");
  };

  // Ativar a animação após o componente ser montado
  useEffect(() => {
    setPlay(true);
  }, []);

  return (
    <div className="banner">
      {/* Animação com framer-motion */}
      <motion.div
        initial={{ opacity: 0 }} // Começar invisível
        animate={{ opacity: 1 }} // Ficar visível
        transition={{ duration: 1, delay: 0.3 }} // Animação suave com delay
      >
        <div className="banner-content">
          <h1>Compre, Venda e Aceite Ativos Digitais.</h1>
          <p>tenha prioridade nesse mercado com a Machine invest.</p>
          <div className="button-div">
            <button class="animated-button">
              <svg
                viewBox="0 0 24 24"
                class="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text">Começar</span>
              <span class="circle"></span>
              <svg
                viewBox="0 0 24 24"
                class="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Imagem de fundo */}
      <img
        className="img-banner"
        src={window.innerWidth < 768 ? imgMobile : img}
        alt="Banner"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
}
