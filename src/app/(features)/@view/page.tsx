import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavigateContext } from "../../../store/providers/NavigateContext";
import { ViewContext } from "../../../store/providers/ViewContext";
import { useSectionScroll } from "../../../hooks/useSectionScroll";
import ViewImageDiv from "./ViewImageDiv";
import ViewDetailsDiv from "./ViewDetailsDiv";
import { FaTimes } from "react-icons/fa";

export default function ViewPage() {
  const { presentScroll } = useSectionScroll();
  const location = useLocation();
  const productName = location.state;
  const [product, setProduct] = useState({});

  const { products, setView } = useContext(NavigateContext);

  useEffect(() => {
    const presentProduct = products.find((product) => product.productName === productName);
    setProduct(presentProduct);
  }, [products]);

  const { id, productName: productNameText, productImage, cutOff, wishlistStock, productAvailable, productPrice, averagePrice, priceOne, priceTwo, productDesc, productDetails, productColors, productSizes, cartAmt, productInfo } = product;
  return (
    <ViewContext.Provider value={{ id, productImage, productNameText, productAvailable, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productColors, productSizes, cartAmt, productInfo }}>
      <section className="navSections" id="productViewSection">
        <main id="productViewMain">
          <div id="productViewBack">
            <FaTimes onClick={() => setView(false)} id="productViewBackIcon" />
          </div>
          <main id="productViewInnerMain" ref={presentScroll}>
            <ViewImageDiv />
            <ViewDetailsDiv />
          </main>
        </main>
      </section>
    </ViewContext.Provider>
  );
}
