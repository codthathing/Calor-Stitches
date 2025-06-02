import { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { NavigateContext } from "../services/contexts/NavigateContext";
import { ReviewContext } from "../services/contexts/ReviewContext";
import { usePageLoadEffects } from "../hooks/usePageLoadEffects";
import PageNavigationLinks from "../components/ui/PageNavigationLinks";
import ReviewPictureDiv from "../components/review/ReviewPictureDiv";
import ReviewSection from "../components/review/ReviewSection";
import AboutSection from "../components/review/AboutSection";
import { useProductShownEffect, Products, ProductPagination } from "../components/product/ProductDisplayComponents";
import PageSection from "../components/layout/PageSection";

const ReviewPage = () => {
  const [product, setProduct] = useState({});
  const { productName } = useParams();
  const { setSearch, setCart, products, setProducts, setWishList } = useContext(NavigateContext);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const reviewSectionRef = useRef(null);

  usePageLoadEffects({
    effectsArray: [
      { effect: setSearch, value: false },
      { effect: setCart, value: false },
      { effect: setWishList, value: false },
    ],
    dependency: productName,
  });

  useEffect(() => {
    const presentProduct = products.find((product) => product.productName === productName);
    setProduct(presentProduct);
    const presentProductCategory = presentProduct.productInfo.find(({ name }) => name === "CARTEGORIES")?.links.map(({ text }) => text);
    const relatedProducts = products.filter(({ productInfo, productName }) => productName !== presentProduct.productName && productInfo.find(({ name }) => name === "CARTEGORIES")?.links.some(({ text }) => presentProductCategory.includes(text)));
    setRelatedProduct(relatedProducts);
  }, [products, productName]);

  useEffect(() => {
    reviewSectionRef.current.scrollTo(0, 0);
  }, [productName]);

  const { mapProducts, shownProducts, setMapProducts, setPageNumbers, pageNumbers } = useProductShownEffect({ products: relatedProduct });

  const { id, productImage, productImages, productName: productNameText, cutOff, productPrice, averagePrice, priceOne, priceTwo, productDesc, wishlistStock, cartAmt, productDetails, productColors, productAvailable, productSizes, productInfo } = product;

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "/product", linkText: "Product", linkArrow: true },
    { id: 2, linkDirect: "", linkText: product.productName, linkArrow: false },
  ];

  const [displayPage, setDisplayPage] = useState("DESCRIPTION");

  return (
    <ReviewContext.Provider value={{ id, products, setProducts, productAvailable, productNameText, productImage, productImages, cutOff, productPrice, averagePrice, priceOne, priceTwo, cartAmt, productDesc, productDetails, productColors, productSizes, wishlistStock, productInfo, displayPage, setDisplayPage, reviewSectionRef }}>
      <PageSection id="productReview">
        <PageNavigationLinks pageLinks={pageLinkDetails} />
        <main id="productReviewMain" className="productMains">
          <ReviewPictureDiv />
          <ReviewSection />
        </main>
        <AboutSection />
        <div id="productRelatedDiv">
          <p id="productRelatedText">Related products</p>
          <Products products={relatedProduct} mapProducts={mapProducts} shownProducts={shownProducts} />
          <ProductPagination setMapProducts={setMapProducts} setPageNumbers={setPageNumbers} pageNumbers={pageNumbers} shownProducts={shownProducts} />
        </div>
      </PageSection>
    </ReviewContext.Provider>
  );
};

export default ReviewPage;
