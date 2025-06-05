import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import WishlistDeleteIcon from "./WishlistDeleteIcon";
import ProductPrice from "../../components/product-template/ProductPrice";
import WishlistStockAlert from "./WishlistStockAlert";
import ProductOptions from "../../components/product-template/ProductOptions";
import { useNavigate } from "react-router-dom";

const WishlistProductTemplate = () => {
  const { setWishList, wishlistItems, setView } = useContext(NavigateContext);
  const navigate = useNavigate();

  const navigateToView = (productName) => {
    navigate("", { state: productName });
    setWishList(false);
    setView(true);
  };

  return (
    <>
      {wishlistItems.map(({ id, productImage, productName, cutOff, productPrice, priceOne, priceTwo, averagePrice, wishlistDate, wishlistStock, productDetails }) => {
        return (
          <div key={id} className="wishListDiv">
            <div className="wishlist-icon-image-div">
              <WishlistDeleteIcon id={id} cancelClass={"delWishListIcon"} />
              <img src={productImage} alt={productName} loading="lazy" className="wishListImage" />
            </div>
            <div className="wishListDetails">
              <h1 className="wishListName wishListTexts" onClick={() => navigateToView(productName)}>
                {productName}
              </h1>
              <ProductPrice priceDivClass={""} productPriceClass={"#222222"} priceClass={"wishListPrice wishListTexts"} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
              <p className="wishListDate wishListTexts">{wishlistDate}</p>
            </div>
            <div className="wishListAvailDiv">
              <WishlistStockAlert mainClass={"wishListAvailMain"} textClass={"wishListAvail wishListTexts"} barClass={"wishListAvailBar"} stockAmt={wishlistStock} showStockBar={true} />
              <ProductOptions id={id} productDetails={productDetails} productName={productName} textClass={"wishlist-cart-btn"} itemsArray={wishlistItems} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WishlistProductTemplate;
