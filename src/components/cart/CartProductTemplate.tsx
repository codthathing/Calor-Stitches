import { useNavigateContext } from "@/store/providers/NavigateProvider";
import CartDeleteIcon from "../layout/user-cart/CartDeleteIcon";
import CartItemAmt from "./CartItemAmt";

export default function CartProductTemplate() {
  const { curSymbol, cloneCart, setCloneCart } = useNavigateContext();

  return (
    <>
      {cloneCart.map(({ id, productImage, productName, cartAmt, productPrice, cartColor, cartSize }) => {
        return (
          <div key={id} className="wishlistCartDiv productCartDiv">
            <div className="wishlistCartIconImageTextDiv">
              <CartDeleteIcon id={id} cancelClass={"wishlistCartDeleteIcon"} />
              <div className="wishlistCartImageNameDiv">
                <img src={productImage} alt={productName} loading="lazy" className="wishlistCartMainImage" />
                <div className="wishlistCartNameDiv">
                  <p className="wishlistCartName">{productName}</p>
                  {cartColor && <p className="wishlistCartName">Color: <span style={{textTransform: "capitalize"}}>{cartColor}</span></p>}
                  {cartSize && <p className="wishlistCartName">Size: <span style={{textTransform: "uppercase"}}>{cartSize}</span></p>}
                </div>
              </div>
            </div>
            <div className="wishlistCartPriceValueDiv">
              <p className="wishlistCartPriceText">Price</p>
              <p className="wishlistCartPriceValue">{curSymbol}{productPrice.toFixed(2)}</p>
            </div>
            <div className="cartQuantityDiv">
              <p className="wishlistStatusText">Quantity</p>
              <CartItemAmt id={id} cartAmt={cartAmt} itemsArray={cloneCart} setItemsArray={setCloneCart} />
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
