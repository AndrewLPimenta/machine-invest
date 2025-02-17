import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Services from "../components/Services";
import Accordion from "../components/Accordion";
import "../index.css";

const cards = [
  {
    titulo: "Card 1",
    subtitulo: "Subtítulo do Card 1",
    descricao: "Descrição do Card 1",
    botaoTexto: "Botão do Card 1",
    imagem: require("../assets/img-card-cell.png"),
  },
  {
    titulo: "Card 1",
    subtitulo: "Subtítulo do Card 1",
    descricao: "Descrição do Card 1",
    botaoTexto: "Botão do Card 1",
    imagem: require("../assets/img-card-server.png"),
  },
  {
    titulo: "Card 1",
    subtitulo: "Subtítulo do Card 1",
    descricao: "Descrição do Card 1",
    botaoTexto: "Botão do Card 1",
    imagem: require("../assets/img-card-cloud-server.png"),
  },
  {
    titulo: "Card 1",
    subtitulo: "Subtítulo do Card 1",
    descricao: "Descrição do Card 1",
    botaoTexto: "Botão do Card 1",
    imagem: require("../assets/img-card-relogio.png"),
  },
];

const sections = [
  {
    title: "Sobre nós",
    text: "Descubra mais sobre nossos produtos e serviços",
    button: "Saiba Mais",
    imgSrc:
      "https://img.freepik.com/vetores-premium/simbolo-de-credito-e-emprestimo_23-2151927251.jpg?w=1380",
  },
  {
    title: "teste1",
    text: "teste1",
    button: "teste1",
    imgSrc:
      "https://img.freepik.com/fotos-gratis/mulher-trabalhando-em-seu-tablet-do-lado-de-fora_23-2149318529.jpg?t=st=1739769769~exp=1739773369~hmac=8b4e35aa3433a5756c57df01e7c0db9e9325d3ada6deb6fa7838f6cd4eca07c7&w=1380",
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <div className="container-cards">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <Services />
      <Accordion/>
      <div className="container-info"></div>
      <div className="container-div">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
