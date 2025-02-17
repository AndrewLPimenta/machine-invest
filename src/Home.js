import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";


import "../index.css";

export default function Home() {
  return (
    <main>
      <Header />

      <Section
        title="Sobre nós"
        text="descubra mais sobre nossos produtos e serviços"
        button="Saiba Mais"
      />

      <Footer />
    </main>
  );
}
