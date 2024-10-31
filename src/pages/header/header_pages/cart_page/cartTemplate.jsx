import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import CartDelete from "./cart_delete";

const CartTemplate = ({ cartArray }) => {
  const { curSymbol } = useContext(ToggleRegister);

  return (
    <div id="cartProductInnerDiv">
      {cartArray.map(({ id, productImage, productName, averagePrice, price, productDetails, cartAmt }) => {
        return (
          <main key={id} className="cartProductMain">
            <img src={productImage} alt={productName} className="cartProductImage" />
            <div className="cartProductDetails">
              <CartDelete id={id} cancelClass={"cartRemove"} />
              <section className="cartDetailsSection">
                <h1 className="cartProductName"><Link key={id} className="productNameText" to={`/product/${productName}`}>{productName}</Link></h1>
                {productDetails?.cartColor && <p className="cartProductText">Color: {productDetails.cartColor}</p>}
                {productDetails?.cartSize && <p className="cartProductText">Size: {productDetails.cartSize}</p>}
                <p className="cartProductText">{cartAmt} * {curSymbol}{(averagePrice ? averagePrice : price).toFixed(2)}</p>
              </section>
            </div>
          </main>
        );
      })}
    </div>
  );
}

export default CartTemplate;