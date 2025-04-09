import { Helmet } from "react-helmet-async";

const PageSection = ({ id, children }) => {
  return (
    <section className="otherPages" id={id}>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://calor-stitches.vercel.app/" />
      </Helmet>
      {children}
    </section>
  );
};

export default PageSection;