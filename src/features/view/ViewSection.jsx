import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import { ViewContext } from "../../services/contexts/ViewContext";
import { useSectionScroll } from "../../hooks/useSectionScroll";
import ViewImageDiv from "./ViewImageDiv";
import ViewDetailsDiv from "./ViewDetailsDiv";

const ViewSection = () => {
  const { presentScroll: addScroll } = useSectionScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useSectionScroll("hidden", "auto");
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
    <ViewContext.Provider value={{id, productImage, productNameText, productAvailable, productDesc, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails, productColors, productSizes, cartAmt, productInfo}}>
      <section className="navSections">
        <main id="productViewMain" ref={addScroll}>
          <div id="productViewDiv">
            <div id="productViewBack"><i className="fa-solid fa-xmark" onClick={() => setView(false)} id="productViewBackIcon" ref={removeScroll}></i></div>
            <main id="productViewInnerMain">
              <ViewImageDiv />
              <ViewDetailsDiv />
            </main>
          </div>
        </main >
      </section >
    </ViewContext.Provider>
  );
}

export default ViewSection;