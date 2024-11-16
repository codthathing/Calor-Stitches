import Header from "./header/header";
import PageLayout from "./body/pagelayout";
import NewsSection from "./news_section/news_section";
import Footer from "./footer/footer";
import { useProductEffect } from "./components/products_effect";
import PreLoad from "./components/pre_load";
import { useHead } from "./header/usehead";

const Home = () => {
  useProductEffect();
  const { PageToTop } = useHead();

  return (
    <>
      <Header />
      <PageLayout />
      <NewsSection />
      <Footer />
      <PreLoad />
      <PageToTop />
    </>
  );
}

export default Home;