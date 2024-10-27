import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import AddToCart from "../../../body/frontpage/innerpages/products_func/addtocart";

const WishlistTemplate = ({ wishlistArray }) => {
  const { curSymbol, wishlistItems, setWishlistItems, dispatch, setWishList } = useContext(ToggleRegister);
  const RemoveWishlistItem = (id) => {
    let remainderItems = wishlistItems.filter((items) => items.id !== id);
    localStorage.setItem("wishlistItems", JSON.stringify(remainderItems));
    dispatch({ display: "REMOVE" });
    setWishlistItems(remainderItems);
    setTimeout(() => {
      dispatch({ display: "CLOSE" });
    }, 1250);
  };

  return (
    <>
      {wishlistArray.map(({ id, productImage, productName, productPrice, priceOne, priceTwo, averagePrice, wishlistDate, wishlistStock }) => {
        return (
          <div key={id} className="wishListDiv">
            <span className="delWishListSpan"><i onClick={() => RemoveWishlistItem(id)} className="fa-solid fa-xmark delWishListIcon"></i></span>
            <img src={productImage} alt={productName} className="wishListImage" />
            <div className="wishListDetails">
              <h1 className="wishListName wishListTexts">
                <Link key={id} className="productNameText" onClick={() => setWishList(false)} to={`/${productName}`}>
                  {productName}
                </Link>
              </h1>
              <p className="wishListPrice wishListTexts">
                {averagePrice ? `${curSymbol}${priceOne.toFixed(2)} - ${curSymbol}${priceTwo.toFixed(2)}` : `${curSymbol}${productPrice.toFixed(2)}`}
              </p>
              <p className="wishListDate wishListTexts">{wishlistDate}</p>
            </div>
            <div className="wishListAvailDiv">
              <main className="wishListAvailMain">
                <p className="wishListAvail wishListTexts">Stock: {wishlistStock}</p>
                <div className="wishListAvailBar"></div>
              </main>
              <AddToCart id={id}></AddToCart>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default WishlistTemplate;