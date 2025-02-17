import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Checkbox from "./CheckBox";
import "../index.css";
import logo from "../assets/logo-machine-invest.png";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Alternar menu de navegação
  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  // Ajustar padding do conteúdo abaixo do header dinamicamente
  useEffect(() => {
    const updatePadding = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);

    return () => {
      window.removeEventListener("resize", updatePadding);
    };
  }, []);

  // Efeito de mudança de cor no scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#header");
      if (header) {
        header.classList.toggle("rolagem", window.scrollY > 500);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="flex">
            {/* Logo */}
            <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>

            {/* Menu de navegação */}
            <div className={`nav ${menuActive ? "active" : ""}`}>
              <ul className="nav-list">
                <li>
                  <Link to="/Information">Sobre</Link>
                </li>
                <li>
                  <Link to="/Portifolio">Home</Link>
                </li>
                <li>
                  <Link to="/Home">Produtos e Serviços</Link>
                </li>

                <li>
                  <Link to="/Network">Duvidas</Link>
                </li>
                <li>
                  <Link to="/Network">Contato</Link>
                </li>
                <li>
                  <Link to="/Network">Termos e condições</Link>
                </li>
                <li className="btn-contato">
                  <Link to="/contato">
                    <button className="btn-2">Acesse sua conta</button>
                    <button className="btn-1">Abra sua conta</button>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Botão Hamburguer */}
            <Checkbox menuActive={menuActive} onClick={toggleMenu} />
          </div>
        </div>
      </header>

      {/* Espaço dinâmico abaixo do header */}
      <div style={{ paddingTop: `${headerHeight}px` }} />
    </>
  );
};

export default Header;
