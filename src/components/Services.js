import React from "react";
import "../index.css";

export default function Services() {
  return (
    <div className="services-container">
      <div className="cards-container four-columns animate-element delayed-animation">
        <div className="horizontal-image-with-icons-card animatedFadeInUp animated fadeInUp">
          <div className="card-content">
            <div className="icon-container">
              <figure className="icon-image" style={{ margin: 0 }}>
                <picture className="icon-image">
                  <img
                    src="https://www.sicredi.com.br/media/home/filer_public_thumbnails/filer_public/2024/10/14/solucoes_completas_svg.png__24x24_subsampling-2.webp"
                    data-src="https://www.sicredi.com.br/media/home/filer_public_thumbnails/filer_public/2024/10/14/solucoes_completas_svg.png__24x24_subsampling-2.webp"
                    className="icon-image blur-up lazyloaded"
                    alt="icon"
                  />
                </picture>
              </figure>
            </div>
            <div className="content-container">
              <h5 className="titulo-tamanho-5-new title-horizontal-image">
                Soluções completas
              </h5>
              <div className="card-description">
                <p className="paragrafo-new">
                  <span>
                    Produtos para você receber e pagar fazendo a gestão de forma
                    centralizada.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="horizontal-image-with-icons-card animatedFadeInUp animated fadeInUp">
          <div className="card-content">
            <div className="icon-container">
              <figure className="icon-image" style={{ margin: 0 }}>
                <picture className="icon-image">
                  <img
                    src="https://www.sicredi.com.br/media/home/filer_public_thumbnails/filer_public/2024/10/14/para_todos_as_empresas_svg.png__25x24_subsampling-2.webp"
                    data-src="https://www.sicredi.com.br/media/home/filer_public_thumbnails/filer_public/2024/10/14/para_todos_as_empresas_svg.png__25x24_subsampling-2.webp"
                    className="icon-image blur-up lazyloaded"
                    alt="icon"
                  />
                </picture>
              </figure>
            </div>
            <div className="content-container">
              <h5 className="titulo-tamanho-5-new title-horizontal-image">
                Para todos as empresas
              </h5>
              <div className="card-description">
                <p className="paragrafo-new">
                  <span>
                    Gerentes preparados para atender você e apoiar todos tipos
                    de negócio, desde MEIs a grandes empresas.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="horizontal-image-with-icons-card animatedFadeInUp animated fadeInUp">
          <div className="card-content">
            <div className="icon-container">
              <figure className="icon-image" style={{ margin: 0 }}>
                <picture className="icon-image">
                  <img
                    src="https://www.sicredi.com.br/media/home/filer_public_thumbnails/filer_public/2024/10/14/atendimento_especializado_svg.png__24x24_subsampling-2.webp"
                    data-src="https://www.sicredi.com.br/media/home/filer_public_thumbnails/filer_public/2024/10/14/atendimento_especializado_svg.png__24x24_subsampling-2.webp"
                    className="icon-image blur-up lazyloaded"
                    alt="icon"
                  />
                </picture>
              </figure>
            </div>
            <div className="content-container">
              <h5 className="titulo-tamanho-5-new title-horizontal-image">
                Atendimento especializado
              </h5>
              <div className="card-description">
                <p>
                  <span>
                    Somos reconhecidos pelos nossos associados pelo bom
                    atendimento e relacionamento.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="horizontal-image-with-icons-card animatedFadeInUp animated fadeInUp">
          <div className="card-content">
            <div className="icon-container">
              <figure className="icon-image" style={{ margin: 0 }}>
                <picture className="icon-image">
                  <img
                    src="https://www.sicredi.com.br/media/home/filer_public_thumbnails/filer_public/2024/10/14/participacao_ativa_svg.png__25x24_subsampling-2.webp"
                    data-src="https://www.sicredi.com.br/media/home/filer_public_thumbnails/filer_public/2024/10/14/participacao_ativa_svg.png__25x24_subsampling-2.webp"
                    className="icon-image blur-up lazyloaded"
                    alt="icon"
                  />
                </picture>
              </figure>
            </div>
            <div className="content-container">
              <h5 className="titulo-tamanho-5-new title-horizontal-image">
                Participação ativa
              </h5>
              <div className="card-description">
                <p>
                  <span>
                    Aqui, você participa das decisões e colhe os frutos do
                    desenvolvimento, investindo na sua empresa e região.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
