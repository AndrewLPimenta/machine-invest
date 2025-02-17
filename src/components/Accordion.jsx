import React, { useState } from "react";
import "../index.css";

export default function Accordion() {

    const [openItem, setOpenItem] = useState(null);

    const toggleAcordeao = (itemId) => {
        setOpenItem(openItem === itemId ? null : itemId);
    };

    return (
        <div className="acordeao" id="acordeaoExemplo">
            {[1, 2, 3, 4, 5, 6].map((itemIndex) => {
                const isOpen = openItem === itemIndex;
                return (
                    <div className="acordeao-item" id={`acordeaoItem${itemIndex}`} key={itemIndex}>
                        <div
                            className="acordeao-cabecalho"
                            onClick={() => toggleAcordeao(itemIndex)}
                        >
                            <button className="acordeao-botao">
                                {itemIndex === 1
                                    ? "O que é um banco cripto"
                                    : itemIndex === 2
                                        ? "Mercado de criptos"
                                        : itemIndex === 3
                                            ? "Compras e Pagamentos"
                                            : itemIndex === 4
                                                ? "Cartões Globalizados"
                                                : itemIndex === 5
                                                    ? "Experiência Premium"
                                                    : "Detalhes da Conta"}
                            </button>
                            <span className="seta material-symbols-outlined">
                                {isOpen ? "∧" : "∨"}
                            </span>
                        </div>
                        <div
                            id={`colapso${itemIndex}`}
                            className={`acordeao-colapso ${isOpen ? "mostrar" : ""}`}
                        >
                            <div className="acordeao-corpo">
                                {itemIndex === 1 && (
                                    <strong>
                                        Banco cripto ou CriptoBanco é um banco 100% digital que oferece aos seus clientes a
                                        possibilidade de comprar criptomoedas de forma simples e acessível.
                                    </strong>
                                )}
                                {itemIndex === 2 && (
                                    <strong>
                                        Explore o Futuro Financeiro no nosso banco digital, Compre, venda e invista em
                                        criptomoedas com segurança e facilidade. Acesse as melhores taxas e oportunidades do
                                        mercado cripto em um só lugar!
                                    </strong>
                                )}
                                {itemIndex === 3 && (
                                    <strong>
                                        Com nosso banco digital, você paga com cartão e recebe em criptomoedas! tudo rápido,
                                        seguro e sem complicação.
                                    </strong>
                                )}
                                {itemIndex === 4 && (
                                    <strong>
                                        Com nossos cartões globalizados, você também pode converter instantaneamente entre moedas
                                        tradicionais e criptomoedas.
                                    </strong>
                                )}
                                {itemIndex === 5 && (
                                    <strong>
                                        Nós nos especializamos em atender clientes que buscam serviços financeiros com um padrão
                                        elevado de qualidade e sofisticação.
                                    </strong>
                                )}
                                {itemIndex === 6 && (
                                    <strong>
                                        Descubra a conveniência de uma conta 100% digital, com acesso completo a todos os
                                        serviços bancários.
                                    </strong>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
