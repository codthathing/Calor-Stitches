import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import WishlistDelete from "./wishlist_delete";
import ProductPrice from "../../../body/frontpage/innerpages/products_func/product_price";
import AddToCart from "../../../body/frontpage/innerpages/products_func/addtocart";

const WishlistTemplate = ({ wishlistArray }) => {
  const { setWishList, wishlistItems } = useContext(ToggleRegister);

  return (
    <>
      {wishlistArray.map(({ id, productImage, productName, cutOff, productPrice, priceOne, priceTwo, averagePrice, wishlistDate, wishlistStock }) => {
        return (
          <div key={id} className="wishListDiv">
            <WishlistDelete id={id} cancelClass={"delWishListIcon"}/>
            <img src={productImage} alt={productName} className="wishListImage" />
            <div className="wishListDetails">
              <h1 className="wishListName wishListTexts">
                <Link key={id} className="productNameText" onClick={() => setWishList(false)} to={`/${productName}`}>
                  {productName}
                </Link>
              </h1>
              <ProductPrice priceDivClass={""} productPriceClass={"#222222"} priceClass={"wishListPrice wishListTexts"} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
              <p className="wishListDate wishListTexts">{wishlistDate}</p>
            </div>
            <div className="wishListAvailDiv">
              <main className="wishListAvailMain">
                <p className="wishListAvail wishListTexts">Stock: {wishlistStock}</p>
                <div className="wishListAvailBar"></div>
              </main>
              <AddToCart id={id} buttonClass={"wishListCartButton"} itemsArray={wishlistItems}></AddToCart>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WishlistTemplate;