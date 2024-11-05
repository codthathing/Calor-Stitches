import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import { useScroll } from "../../../header/usescroll";
import ProductAvail from "./products_func/product_avail";
import ReviewDetails from "../../otherpages/review/review_details";
import WishlistStock from "../../../header/header_pages/wishlist_page/wishlist_stock";
import ReviewColor from "../../otherpages/review/review_color";
import ReviewSize from "../../otherpages/review/review_size";
import ReviewFunctions from "../../otherpages/review/review_functions";
import ReviewProductDetails from "../../otherpages/review/review_product_details";

const ProductView = () => {
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");
  const { productName } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  const { products } = useContext(ToggleRegister);

  useEffect(() => {
    const presentProduct = products.find((product) => product.productName === productName);
    setProduct(presentProduct);
  }, [products]);

  const { id, productName: productNameText, productImage, cutOff, wishlistStock, productAvailable, productPrice, averagePrice, priceOne, priceTwo, productDesc, productDetails, productColors, productSizes, cartAmt, productInfo } = product;

  return (
    <section className="navSections">
      <main id="productViewMain" ref={addScroll}>
        <div id="productViewDiv">
          <div id="productViewBack"><i className="fa-solid fa-xmark" onClick={() => navigate(-1)} id="productViewBackIcon" ref={removeScroll}></i></div>
          <main id="productViewInnerMain">
            <div id="productViewImageDiv" style={{ backgroundImage: `url(${productImage})` }}>
              <ProductAvail productAvailable={productAvailable} cutOff={cutOff} wishlistStock={wishlistStock} />
            </div>
            <div id="productViewMainDiv">
              <ReviewDetails productReview={false} productNameText={productNameText} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} productDesc={productDesc} />
              {(wishlistStock || wishlistStock === 0) && <WishlistStock mainClass={"productDivs"} textClass={"productPrepText"} barClass={"productPrepDiv"} stockAmt={wishlistStock} showStockBar={true} />}
              {(productDetails && productColors) && <ReviewColor productId={id} colorText={productDetails.cartColor} colorArray={productColors} />}
              {(productDetails && productSizes) && <ReviewSize productId={id} sizeText={productDetails.cartSize} sizeArray={productSizes} />}
              <ReviewFunctions id={id} cartAmt={cartAmt} navPage={-1} />
              {productInfo && <ReviewProductDetails productInfo={productInfo} />}
              <div id="productReviewLinkDiv">
                <span id="productReviewLink" onClick={() => navigate(`/product/${productNameText}`)}>VIEW PRODUCT DETAILS</span>
              </div>
            </div>
          </main>
        </div>
      </main >
    </section >
  );
}

export default ProductView;