import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToggleRegister } from "../../../../contextpage";
import ProductAvail from "./product_avail";
import ProductPrice from "./product_price";
import AddToWishList from "./addtowishlist";
import ProductOptions from "./product_options";
import { useShowPreload } from "../../../../components/show_preload";

const ProductTemplate = ({ productArray }) => {
  const { products } = useContext(ToggleRegister);
  const [showViewText, setShowViewText] = useState(null);
  const navigate = useNavigate();
  const { HandlePreload } = useShowPreload();

  const NavigateToView = (productName) => {
    HandlePreload();
    setShowViewText(false);
    setTimeout(() => {
      navigate(`/${productName}`);
    }, 2000);
  };

  return (
    <main id="mainProduct">
      {productArray.map(({ id, productAvailable, productImage, productName, cutOff, productPrice, priceOne, priceTwo, averagePrice, productDetails, wishlistStock }) => {
        return (
          <div className="productDiv" key={id}>
            <div className="productInnerDiv" style={{ backgroundImage: `url(${productImage})` }}>
              <Link to={`/product/${productName}`}>
                <section className="orderOptions">
                  <ProductAvail productAvailable={productAvailable} wishlistStock={wishlistStock} cutOff={cutOff} />
                </section>
              </Link>
              <div className="optionBtnsDiv">
                <div className="optionDiv optionDivWishlist">
                  <AddToWishList id={id} showText={false} showIcon={true} />
                </div>
                <ProductOptions id={id} productDetails={productDetails} productName={productName} textClass={"paragraphStyles selectOption"} itemsArray={products} />
                <div className="optionDiv">
                  <i className="fa-regular fa-eye optionIcon" onClick={() => NavigateToView(productName)} onMouseEnter={() => setShowViewText(id)} onMouseLeave={() => setShowViewText(null)}></i>
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