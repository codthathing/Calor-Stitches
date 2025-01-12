import { useScrollEffect } from "../../hooks/useScrollEffect";
import PagePreload from "../ui/PagePreload";

const PageComponents = () => {
  const { PageScrollToTop } = useScrollEffect();
  return (
    <>
      <PageScrollToTop />
      <PagePreload />
    </>
  );
};

export default PageComponents;