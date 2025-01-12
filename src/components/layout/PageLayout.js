import { Outlet } from "react-router-dom";
import Header from "./Header";
import NewsSection from "../news-letter/NewsSection";
import Footer from "./Footer";
import PageComponents from "./PageComponents";

const PageLayout = () => {

  return (
    <>
      <Header />
      <Outlet />
      <NewsSection />
      <Footer/>
      <PageComponents />
    </>
  );
}

export default PageLayout;