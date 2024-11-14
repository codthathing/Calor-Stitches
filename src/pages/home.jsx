import Header from "./header/header";
import PageLayout from "./body/pagelayout";
import NewsSection from "./news_section/news_section";
import Footer from "./footer/footer";
import { useProductEffect } from "./components/products_effect";
import PreLoad from "./components/pre_load";

const Home = () => {
  useProductEffect();

  return (
    <>
      <Header />
      <PageLayout />
      <NewsSection />
      <Footer />
      <PreLoad />
    </>
  );
}

export default Home;