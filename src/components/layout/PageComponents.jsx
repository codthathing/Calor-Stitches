import { useScrollEffect, PageScrollToTop } from "../../hooks/useScrollEffect";
import PagePreload from "../ui/PagePreload";

const PageComponents = () => {
  const { showNavToTop } = useScrollEffect();
  return (
    <>
      <PageScrollToTop showIcon={showNavToTop} />
      <PagePreload />
    </>
  );
};

export default PageComponents;
