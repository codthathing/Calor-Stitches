import { useEffect, useState, useContext, createContext } from "react";
import { useParams } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import { usePageInitialEffects } from "../components/page_effects";
import PageLinkTemplate from "../components/pagelinks";
import ReviewPicture from "./review_picture";
import ReviewDetails from "./review_details";
import WishlistStock from "../../../header/header_pages/wishlist_page/wishlist_stock";
import ReviewColor from "./review_color";
import ReviewSize from "./review_size";
import ReviewFunctions from "./review_functions";
import Handle from "../../../news_section/handle";
import serviceIcon from "../../../../asset/images-icons/serviceIcons/iconmonstr-delivery-2-240.png";
import Payment from "../../../footer/payment";
import ProductTemplate from "../../frontpage/innerpages/products_func/productTemplate";

export const ReviewContext = createContext();
const ProductReview = () => {

  const [product, setProduct] = useState({});
  const { productName } = useParams();
  const { setSearch, setNavbar, setCart, setToggleSideMenu, products, setProducts } = useContext(ToggleRegister);

 usePageInitialEffects([{ effect: setSearch, value: false }, { effect: setToggleSideMenu, value: false }, { effect: setNavbar, value: true }, { effect: setCart, value: false }]);

  useEffect(() => {
    const presentProduct = products.find((product) => product.productName === productName);
    setProduct(presentProduct);
  }, [products]);

  const { id, productImage, productImages, productName: productNameText, cutOff, productPrice, averagePrice, priceOne, priceTwo, productDesc, wishlistStock, cartAmt, productDetails, productColors, productAvailable, productSizes } = product;

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "/product", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: product.productName, linkArrow: false }
  ]

  return (
    <ReviewContext.Provider value={{ id, products, setProducts, productAvailable, productNameText, cutOff, productPrice, averagePrice, priceOne, priceTwo, cartAmt, productDesc, wishlistStock }}>
      <div className="otherPages" id="productReview">
        <PageLinkTemplate pageLinks={pageLinkDetails} />
        <main id="productReviewMain" className="productMains">
          {productImages && <ReviewPicture mainImage={productImage} imagesArray={productImages} />}
          <div id="productReviewDiv">
            <ReviewDetails productReview={true} productNameText={productNameText} productDesc={productDesc} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
            {(wishlistStock || wishlistStock === 0) && <WishlistStock mainClass={"productDivs"} textClass={"productPrepText"} barClass={"productPrepDiv"} stockAmt={wishlistStock} showStockBar={true} />}
            {(productDetails && productColors) && <ReviewColor productId={id} colorText={productDetails.cartColor} colorArray={productColors} />}
            {(productDetails && productSizes) && <ReviewSize productId={id} sizeText={productDetails.cartSize} sizeArray={productSizes} />}
            <ReviewFunctions />
            <div id="productDelivery">
              <div id="productDeliveryInfo">
                <div className="productDeliveryInfoInnerDiv">
                  <img src={serviceIcon} alt="" className="productDeliveryInfoIcons" />
                  <p className="productDeliveryInfoTexts">Free shipping on US orders $90+</p>
                </div>
                <div className="productDeliveryInfoInnerDiv">
                  <img src={serviceIcon} alt="" className="productDeliveryInfoIcons" />
                  <p className="productDeliveryInfoTexts">Free shipping on US orders $90+</p>
                </div>
                <div className="productDeliveryInfoInnerDiv">
                  <img src={serviceIcon} alt="" className="productDeliveryInfoIcons" />
                  <p className="productDeliveryInfoTexts">Free shipping on US orders $90+</p>
                </div>
              </div>
              <div id="productDeliveryPayment">
                <p id="productDeliveryPaymentText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas autem ipsum unde veritatis laboriosam placeat quia illo asperiores distinctio consectetur.</p>
                <div id="productDeliveryPaymentDiv">
                  <Payment></Payment>
                </div>
              </div>
              <div className="productDeliveryDetails">
                <p className="productDeliveryDetailsTexts">SKU: <span className="productDeliveryDetailsInnerText">ED5690042</span> <span className="productDeliveryDetailsSpan">|</span></p>
                <p className="productDeliveryDetailsTexts">SKU: <span className="productDeliveryDetailsInnerText">ED5690042</span></p>
              </div>
              <div id="productHandles">
                <Handle></Handle>
              </div>
            </div>
          </div>
        </main >

        <div id="productAbout">
          <main id="productAboutMain">
            <p className="productAboutMainTexts">DESCRIPTION</p>
            <p className="productAboutMainTexts">REVIEW</p>
          </main>
          <div id="productAboutText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae maxime veniam molestias ex odit quas ipsum tempore sint. Sunt ea, quam illo officiis quasi ut molestias delectus impedit facere vel quia quibusdam! Harum, non, accusantium magnam deserunt, tenetur vero dolores itaque officiis esse placeat deleniti? Voluptates beatae minima unde nisi.
            <div id="productAboutTextInnerDiv">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, ullam. Similique, veritatis error. Voluptas labore earum atque et ad libero, nisi officia. At impedit, incidunt autem fuga illum excepturi magnam obcaecati, adipisci debitis laboriosam explicabo, amet atque velit. Aliquid repellat perspiciatis consectetur magni alias exercitationem numquam facilis a animi error culpa, voluptate similique nesciunt. Voluptate natus dicta dolor eligendi reprehenderit sequi amet saepe sunt quo repellat omnis atque quibusdam aperiam, nesciunt asperiores perferendis earum quis culpa quidem odit quia unde? Cupiditate veniam nulla id asperiores adipisci repellendus, doloribus minus quis voluptatem? Eligendi neque error dicta adipisci nesciunt mollitia vero vitae.
              <div id="productAboutDiv">
                <div className="productAboutInnerDiv">
                  <img src={serviceIcon} alt="" className="productAboutInnerImage" />
                  <p className="productAboutInnerText">Machine wash max. 30ºC. Short spin.</p>
                </div>
                <div className="productAboutInnerDiv">
                  <img src={serviceIcon} alt="" className="productAboutInnerImage" />
                  <p className="productAboutInnerText">Machine wash max. 30ºC. Short spin.</p>
                </div>
                <div className="productAboutInnerDiv">
                  <img src={serviceIcon} alt="" className="productAboutInnerImage" />
                  <p className="productAboutInnerText">Machine wash max. 30ºC. Short spin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="productRelatedDiv">
          <p id="productRelatedText">Related products</p>
          <ProductTemplate productArray={products} />
        </div>
      </div >
    </ReviewContext.Provider>
  );
}

export default ProductReview;