import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import CartDeleteIcon from "./CartDeleteIcon";

const CartProductTemplate = ({ cartArray }) => {
  const { curSymbol } = useContext(NavigateContext);

  return (
    <div id="cartProductInnerDiv">
      {cartArray.map(({ id, productImage, productName, productPrice, cartSize, cartColor, cartAmt }) => {
        return (
          <main key={id} className="cartProductMain">
            <img src={productImage} alt={productName} className="cartProductImage" />
            <div className="cartProductDetails">
              <CartDeleteIcon id={id} cancelClass={"cartRemove"} />
              <section className="cartDetailsSection">
                <h1 className="cartProductName">
                  <Link key={id} className="productNameText" to={`/product/${productName}`}>
                    {productName}
                  </Link>
                </h1>
                {cartColor && (
                  <p className="cartProductText">
                    Color: <span style={{ textTransform: "capitalize" }}>{cartColor}</span>
                  </p>
                )}
                {cartSize && (
                  <p className="cartProductText">
                    Size: <span style={{ textTransform: "uppercase" }}>{cartSize}</span>
                  </p>
                )}
                <p className="cartProductText">
                  {cartAmt} * {curSymbol}
                  {productPrice.toFixed(2)}
                </p>
              </section>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default CartProductTemplate;
