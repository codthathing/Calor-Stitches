import { useEffect, useState, useContext, createContext } from "react";
import { useParams } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import { usePageInitialEffects } from "../components/page_effects";
import PageLinkTemplate from "../components/pagelinks";
import ReviewPicture from "./review_picture";
import ReviewDiv from "./review_div";
import AboutDiv from "./about/about_div";
import { useProductShownEffect, Products, ProductPagination } from "../product_page/product_shown_effect";

export const ReviewContext = createContext();
const ProductReview = () => {

  const [product, setProduct] = useState({});
  const { productName } = useParams();
  const { setSearch, setCart, products, setProducts } = useContext(ToggleRegister);
  const [relatedProduct, setRelatedProduct] = useState([]);

  usePageInitialEffects({effectsArray: [{ effect: setSearch, value: false }, { effect: setCart, value: false }], dependency: productName});

  useEffect(() => {
    const presentProduct = products.find((product) => product.productName === productName);
    setProduct(presentProduct);
    const presentProductCategory = presentProduct.productInfo.find(({ name }) => name === "CARTEGORIES")?.links.map(({ text }) => text);
    const relatedProducts = products.filter(({ productInfo, productName }) => (productName !== presentProduct.productName) && productInfo.find(({ name }) => name === "CARTEGORIES")?.links.some(({ text }) => presentProductCategory.includes(text)));
    setRelatedProduct(relatedProducts);
  }, [products, productName]);

  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers } = useProductShownEffect({products: relatedProduct});

  const { id, productImage, productImages, productName: productNameText, cutOff, productPrice, averagePrice, priceOne, priceTwo, productDesc, wishlistStock, cartAmt, productDetails, productColors, productAvailable, productSizes, productInfo } = product;

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "/product", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: product.productName, linkArrow: false }
  ];

  const [displayPage, setDisplayPage] = useState("DESCRIPTION");

  return (
    <ReviewContext.Provider value={{ id, products, setProducts, productAvailable, productNameText, productImage, productImages, cutOff, productPrice, averagePrice, priceOne, priceTwo, cartAmt, productDesc, productDetails, productColors, productSizes, wishlistStock, productInfo, displayPage, setDisplayPage }}>
      <div className="otherPages" id="productReview">
        <PageLinkTemplate pageLinks={pageLinkDetails} />
        <main id="productReviewMain" className="productMains">
          <ReviewPicture />
          <ReviewDiv />
        </main >
        <AboutDiv />
        <div id="productRelatedDiv">
          <p id="productRelatedText">Related products</p>
          <Products products={relatedProduct} mapProducts={mapProducts} shownProducts={shownProducts} />
          <ProductPagination setMapProducts={setMapProducts} setPageNumbers={setPageNumbers} pageNumbers={pageNumbers} shownProducts={shownProducts} />
        </div>
      </div>
    </ReviewContext.Provider>
  );
}

export default ProductReview;