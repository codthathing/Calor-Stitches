import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import CartDelete from "../../../header/header_pages/cart_page/cart_delete";
import CartAmt from "./cart_amt";

const CartProduct = () => {
  const { cartItems, setCartItems, curSymbol } = useContext(ToggleRegister);

  return (
    <>
      {cartItems.map(({ id, productImage, productName, cartAmt, productPrice, cartColor, cartSize }) => {
        return (
          <div key={id} className="wishlistCartDiv productCartDiv">
            <div className="wishlistCartIconImageTextDiv">
              <CartDelete id={id} cancelClass={"wishlistCartDeleteIcon"} />
              <div className="wishlistCartImageNameDiv">
                <img src={productImage} alt="" className="wishlistCartMainImage" />
                <div className="wishlistCartNameDiv">
                  <p className="wishlistCartName">{productName}</p>
                  {cartColor && <p className="wishlistCartName">Color: {cartColor}</p>}
                  {cartSize && <p className="wishlistCartName">Size: {cartSize}</p>}
                </div>
              </div>
            </div>
            <div className="wishlistCartPriceValueDiv">
              <p className="wishlistCartPriceText">Price</p>
              <p className="wishlistCartPriceValue">{curSymbol}{productPrice.toFixed(2)}</p>
            </div>
            <div className="cartQuantityDiv">
              <p className="wishlistStatusText">Quantity</p>
              <CartAmt id={id} cartAmt={cartAmt} itemsArray={cartItems} setItemsArray={setCartItems} />
            </div>
            <div className="wishlistCartPriceValueDiv">
              <p className="wishlistCartPriceText">Subtotal</p>
              <p className="wishlistCartPriceValue">{curSymbol}{((cartAmt) * productPrice).toFixed(2)}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CartProduct;