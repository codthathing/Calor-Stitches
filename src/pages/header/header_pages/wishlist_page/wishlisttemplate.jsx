import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import WishlistDelete from "./wishlist_delete";
import ProductPrice from "../../../body/frontpage/innerpages/products_func/product_price";
import WishlistStock from "./wishlist_stock";
import ProductOptions from "../../../body/frontpage/innerpages/products_func/product_options";

const WishlistTemplate = () => {
  const { setWishList, wishlistItems, setView } = useContext(ToggleRegister);
  const navigate = useNavigate();
  const NavigateToView = (productName) => {
    navigate("", { state: productName });
    setView(true);
    setWishList(false);
  };

  return (
    <>
      {wishlistItems.map(({ id, productImage, productName, cutOff, productPrice, priceOne, priceTwo, averagePrice, wishlistDate, wishlistStock, productDetails }) => {
        return (
          <div key={id} className="wishListDiv">
            <WishlistDelete id={id} cancelClass={"delWishListIcon"} />
            <img src={productImage} alt={productName} className="wishListImage" />
            <div className="wishListDetails">
              <h1 className="wishListName wishListTexts" onClick={() => NavigateToView(productName)}>{productName}</h1>
              <ProductPrice priceDivClass={""} productPriceClass={"#222222"} priceClass={"wishListPrice wishListTexts"} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
              <p className="wishListDate wishListTexts">{wishlistDate}</p>
            </div>
            <div className="wishListAvailDiv">
              <WishlistStock mainClass={"wishListAvailMain"} textClass={"wishListAvail wishListTexts"} barClass={"wishListAvailBar"} stockAmt={wishlistStock} showStockBar={true} />
              <ProductOptions id={id} productDetails={productDetails} productName={productName} textClass={"wishlist-cart-btn"} itemsArray={wishlistItems} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WishlistTemplate;