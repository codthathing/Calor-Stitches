import { useEffect, useState, useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import { ToggleRegister } from "../../contextpage";
import PageLinkTemplate from "./components/pagelinks";
import Handle from "../../news_section/handle";
import productImage from "../../../asset/images-icons/productImages/design_eight.jpeg";
import serviceIcon from "../../../asset/images-icons/serviceIcons/iconmonstr-delivery-2-240.png";
import Payment from "../../footer/payment";
import ProductTemplate from "../frontpage/innerpages/products_func/productTemplate";

const ProductReview = () => {

  const [product, setProduct] = useState({});
  const { productName } = useParams();
  const { pathname } = useLocation();
  const { setSearch, setNavbar, setCart, setToggleSideMenu, products } = useContext(ToggleRegister);

  useEffect(() => {
    const presentProduct = products.find((product) => product.productName === productName);
    setProduct(presentProduct);
    window.scrollTo(0, 0);
    setSearch(false);
    setToggleSideMenu(false);
    setNavbar(true);
    setCart(false);
  }, [pathname, productName, products, setCart, setNavbar, setSearch, setToggleSideMenu])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "/product", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: product.productName, linkArrow: false }
  ]

  return (
    <div className="otherPages" id="productReview">
      <PageLinkTemplate pageLinks={pageLinkDetails} />

      <main id="productReviewMain" className="productMains">
        <picture id="productReviewImages">
          <ul id="productSideImages">
            <li className="productSizeList imageSize"><img src={productImage} alt="" className="productSizeImage imageSize" /></li>
            <li className="productSizeList imageSize"><img src={productImage} alt="" className="productSizeImage imageSize" /></li>
            <li className="productSizeList imageSize"><img src={productImage} alt="" className="productSizeImage imageSize" /></li>
            <li className="productSizeList imageSize"><img src={productImage} alt="" className="productSizeImage imageSize" /></li>
            <li className="productSizeList imageSize"><img src={productImage} alt="" className="productSizeImage imageSize" /></li>
          </ul>
          <div id="productMainImageDiv" className="imageSize">
            <img src={productImage} alt="" id="productMainImage imageSize" className="imageSize" />
          </div>
        </picture>

        <div id="productReviewDiv">
          <div className="productDetailsDiv">
            <p className="productDetailName">Heeloo</p>
            <span className="productDetailPrice">$85.00</span>
            <p id="productDetailReview">(1 customer review / Add review)</p>
            <p className="productDetailDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vitae provident odio, suscipit repellendus vero in voluptas molestias alias doloremque nihil recusandae ratione totam optio, deserunt sint dignissimos placeat ex!</p>
          </div>
          <div id="productPrepReview" className="productDivs">
            <p className="productPrepText">Stock: In stock, ready to be shipped</p>
            <div className="productPrepDiv"></div>
          </div>
          <div id="productColorReview" className="productDivs">
            <p className="productColorText">Color Green</p>
            <main className="productColorMain">
              <div className="productColorMainDiv" style={{ backgroundColor: "#00A849" }}></div>
              <p className="productColorMainText">Green</p>
            </main>
          </div>
          <div id="productSizeReview" className="productDivs">
            <div className="productSizeDiv">
              <p className="productSizeText">Size L</p>
              <p className="productSizeText">SIZE CHARTS</p>
            </div>
            <main className="productSizeMain">
              <p className="productSizeMainText">L</p>
            </main>
          </div>
          <div id="productFunctionsReview" className="productDivs">
            <div className="productToCart">
              <div className="productToCartDiv">
                <div className="productToCartInnerDiv">1</div>
                <div className="productToCartInnerDiv">+</div>
                <div className="productToCartInnerDiv">-</div>
              </div>
              <button type="button" className="productToCartButton">ADD TO CART</button>
            </div>
            <div className="productToWishlist">
              <i className="fa-regular fa-heart productWishlistIcon"></i>
              <p className="productWishlistText">ADD TO WISHLIST</p>
            </div>
          </div>
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
  );
}

export default ProductReview;