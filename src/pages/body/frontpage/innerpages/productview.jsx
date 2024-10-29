import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import { useScroll } from "../../../header/usescroll";
import AddToWishList from "./products_func/addtowishlist";

const ProductView = () => {
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");
  const { products, curSymbol } = useContext(ToggleRegister);
  const { productName } = useParams();
  const [product, setProduct] = useState({});
  const [displayPage, setDisplayPage] = useState(false);

  useEffect(() => {
    const product = products.find((product) => product.productName === productName);
    setProduct(product);
  }, [products, productName]);
  const { id, productName: productNameText, productImage, cutOff, productPrice, priceOne, priceTwo, averagePrice, doubleProductAvail, productAvailable, doubleAvailColor, productAvailableColor, productDetails, cartAmt, wishlistStock } = product;
  setTimeout(() => {
    setDisplayPage(true);
  })


  return (
    <section className="navSections">
      <main id="productViewMain" ref={addScroll}>
        <div id="productViewDiv">
          <Link to="/" id="productViewBack" ref={removeScroll}><i className="fa-solid fa-xmark" id="productViewBackIcon"></i></Link>
          {displayPage &&
            <main id="productViewInnerMain">
              <div id="productViewImageDiv" style={{ backgroundImage: `url(${productImage})` }}>
                <div className="availDiv">
                  {doubleProductAvail && <span className="productAvail paragraphStyles" style={{ backgroundColor: doubleAvailColor }}>{doubleProductAvail}</span>}
                  {productAvailable && <span className="productAvail paragraphStyles" style={{ backgroundColor: productAvailableColor }}>{productAvailable}</span>}
                </div>
              </div>
              <div id="productViewMainDiv">
                <div className="productDetailsDiv">
                  <p className="productDetailName">{productNameText}</p>
                  <div className="priceDiv" style={{ justifyContent: "flex-start" }}>
                    {cutOff && <span className="productPrice originalPrice">{curSymbol}{((100 / cutOff) * productPrice).toFixed(2)}</span>}
                    <span className="productPrice" style={{ color: cutOff ? "#FF0000" : "#222222" }}>
                      {averagePrice ? `${curSymbol}${priceOne.toFixed(2)} - ${curSymbol}${priceTwo.toFixed(2)}` : `${curSymbol}${productPrice.toFixed(2)}`}
                    </span>
                  </div>
                  <p className="productDetailDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!</p>
                </div>
                <div id="productPrepView" className="productDivs">
                  <p className="productPrepText">{wishlistStock}</p>
                  <div className="productPrepDiv"></div>
                </div>
                {productDetails?.color && <div id="productColorView" className="productDivs">
                  <p className="productColorText">Color {productDetails.cartColor}</p>
                  <main className="productColorMain">
                    <div className="productColorMainDiv" style={{ backgroundColor: "#00A849" }}></div>
                    <p className="productColorMainText">{productDetails.cartColor}</p>
                  </main>
                </div>}
                {productDetails.cartSize && <div id="productSizeView" className="productDivs">
                  <div className="productSizeDiv">
                    <p className="productSizeText">Size {productDetails.cartSize}</p>
                  </div>
                  <main className="productSizeMain">
                    <p className="productSizeMainText">{productDetails.cartSize}</p>
                  </main>
                </div>}
                <div id="productFunctionsView" className="productDivs">
                  <div className="productToCart">
                    <div className="productToCartDiv">
                      <div className="productToCartInnerDiv">{cartAmt}</div>
                      <div className="productToCartInnerDiv">+</div>
                      <div className="productToCartInnerDiv">-</div>
                    </div>
                    <button type="button" className="productToCartButton">ADD TO CART</button>
                  </div>
                  <AddToWishList id={id} showText={true} showIcon={false}></AddToWishList>
                </div>
                <div id="productDeliveryDetailsView" className="productDeliveryDetails">
                  <p className="productDeliveryDetailsTexts">SKU: <span className="productDeliveryDetailsInnerText">ED5690042</span> <span className="productDeliveryDetailsSpan">|</span></p>
                  <p className="productDeliveryDetailsTexts">SKU: <span className="productDeliveryDetailsInnerText">ED5690042</span></p>
                </div>
                <div id="productReviewLinkDiv">
                  <Link to={`/product/${productNameText}`} id="productReviewLink">VIEW PRODUCT DETAILS</Link>
                </div>
              </div>
            </main>
          }
        </div>
      </main >
    </section >
  );
}

export default ProductView;