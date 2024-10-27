import Header from "./header/header";
import PageLayout from "./body/pagelayout";
import NewsSection from "./news_section/news_section";
// import Footer from "./footer/footer.jsx";


const Home = () => {
  return (
    <>
      <Header />
      <PageLayout />
      <NewsSection />
      {/* <Footer /> */}
    </>
  );
}

export default Home;