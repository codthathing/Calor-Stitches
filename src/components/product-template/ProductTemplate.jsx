import { startTransition, useContext, useState } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import ProductStockAlert from "./ProductStockAlert";
import ProductPrice from "./ProductPrice";
import AddToWishList from "./AddToWishlist";
import ProductOptions from "./ProductOptions";
import { useShowPreload } from "../../hooks/useShowPreload";
import { FiEye } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductTemplate = ({ productArray }) => {
  const { products, setView } = useContext(NavigateContext);
  const [showViewText, setShowViewText] = useState(null);
  const { showPreload } = useShowPreload();
  const navigate = useNavigate();

  const navigateToView = (productName) => {
    startTransition(() => {
      setShowViewText(false);
      showPreload();
      setTimeout(() => {
        navigate("", { state: productName });
        setView(true);
      }, 2000);
    });
  };

  return (
    <main id="mainProduct">
      {productArray.map(({ id, productAvailable, productImage, productName, cutOff, productPrice, priceOne, priceTwo, averagePrice, productDetails, wishlistStock }) => {
        return (
          <div className="productDiv" key={id}>
            <div className="productInnerDiv">
              <img src={productImage} loading="lazy" style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", zIndex: "-1" }} alt={productName.toUpperCase()} />
              <section onClick={() => navigate(`/product/${productName}`)} className="orderOptions">
                <ProductStockAlert productAvailable={productAvailable} wishlistStock={wishlistStock} cutOff={cutOff} />
              </section>
              <div className="optionBtnsDiv">
                <div className="optionDiv optionDivWishlist">
                  <AddToWishList id={id} showText={false} showIcon={true} />
                </div>
                <ProductOptions id={id} productDetails={productDetails} productName={productName} textClass={"paragraphStyles selectOption"} itemsArray={products} />
                <div className="optionDiv">
                  <FiEye className="optionIcon" onClick={() => navigateToView(productName)} onMouseEnter={() => setShowViewText(id)} onMouseLeave={() => setShowViewText(null)} />
                  {showViewText === id && <div className="optionText viewOptionText">Quick View</div>}
                </div>
              </div>
            </div>
            <section className="productNamePrice">
              <p className="productName">{productName}</p>
              <ProductPrice priceDivClass={"center"} productPriceClass={"#FF0000"} priceClass={"productPrice"} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
            </section>
          </div>
        );
      })}
    </main>
  );
};

export default ProductTemplate;
