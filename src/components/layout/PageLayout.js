import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header";
import NewsSection from "../news-letter/NewsSection";
import Footer from "./Footer";
import PageComponents from "./PageComponents";

const PageLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <NewsSection />
      <Footer />
      <PageComponents />
    </>
  );
};

export default PageLayout;
