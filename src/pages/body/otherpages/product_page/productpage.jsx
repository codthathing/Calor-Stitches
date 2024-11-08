import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import { usePageInitialEffects } from "../components/page_effects";
import PageLinkTemplate from "../components/pagelinks";
import ProductFilter from "./product_filter";
import { useProductShownEffect } from "./product_shown_effect";

const ProductPage = () => {

  const { setNavbar, setToggleSideMenu, products } = useContext(ToggleRegister);
  usePageInitialEffects([{ effect: setToggleSideMenu, value: false }, { effect: setNavbar, value: true }]);

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "Product", linkArrow: false },
  ];

  const { ProductShown, Products, ProductPagination } = useProductShownEffect(products)

  return (
    <div className="otherPages">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="productAllMain" className="productMains">
        <div className="productShownDiv">
          <ProductShown />
          <ProductFilter textTwo={true} />
        </div>
        <Products />
        <ProductPagination />
      </main>
    </div>
  );
}

export default ProductPage;