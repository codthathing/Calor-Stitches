import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ToggleRegister } from "../../../../contextpage";
import { useScroll } from "../../../../header/usescroll";
import ViewImage from "./view_image";
import ViewDiv from "./view_div";

export const ViewContext = createContext();
const ProductView = () => {
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");
  const location = useLocation();
  const productName = location.state;
  const [product, setProduct] = useState({});

  const { products, setView } = useContext(ToggleRegister);

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
              <ViewImage />
              <ViewDiv />
            </main>
          </div>
        </main >
      </section >
    </ViewContext.Provider>
  );
}

export default ProductView;