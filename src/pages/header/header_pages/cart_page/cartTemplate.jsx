import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import CartDelete from "./cart_delete";

const CartTemplate = ({ cartArray }) => {
  const { curSymbol } = useContext(ToggleRegister);

  return (
    <div id="cartProductInnerDiv">
      {cartArray.map(({ id, productImage, productName, productPrice, cartSize, cartColor, cartAmt }) => {
        return (
          <main key={id} className="cartProductMain">
            <img src={productImage} alt={productName} className="cartProductImage" />
            <div className="cartProductDetails">
              <CartDelete id={id} cancelClass={"cartRemove"} />
              <section className="cartDetailsSection">
                <h1 className="cartProductName"><Link key={id} className="productNameText" to={`/product/${productName}`}>{productName}</Link></h1>
                {cartColor && <p className="cartProductText">Color: {cartColor}</p>}
                {cartSize && <p className="cartProductText">Size: {cartSize}</p>}
                <p className="cartProductText">{cartAmt} * {curSymbol}{productPrice.toFixed(2)}</p>
              </section>
            </div>
          </main>
        );
      })}
    </div>
  );
}

export default CartTemplate;