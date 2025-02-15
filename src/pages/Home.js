import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import "../index.css";

const sections = [
  {
    title: "Sobre nós",
    text: "Descubra mais sobre nossos produtos e serviços",
    button: "Saiba Mais",
    imgSrc:
      "https://tse4.mm.bing.net/th?id=OIP.TPWXAJhc3TxloxOTx4JhMQHaEK&pid=Api&P=0&h=180",
  },
  {
    title: "Nosos Serviços",
    text: "Faça parte da nossa comunidade!",
    button: "Confira agora!",
    imgSrc:
      "https://tse1.mm.bing.net/th?id=OIP.oeW3kw3hUeWclCjMlSZbVAHaE7&pid=Api&P=0&h=180",
  },
  {
    title: "Nossos Parceiros",
    text: "Confira nossa lista de parceiros",
    button: "Faça parte!",
    imgSrc:
      "https://tse4.mm.bing.net/th?id=OIP.rpprKD3ZyxBOQQcZ8_CYlgHaE8&pid=Api&P=0&h=180",
  },
  {
    title: "Nossos Produtos",
    text: "Confira nossa lista de produtos",
    button: "Não fique de fora!",
    imgSrc:
      "https://tse1.mm.bing.net/th?id=OIP.pBaw77g1zX-juBuwAHCmcAHaEC&pid=Api&P=0&h=180",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <div className="container-div">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
