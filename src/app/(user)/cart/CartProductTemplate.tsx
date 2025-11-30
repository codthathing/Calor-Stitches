import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavigateContext } from "../../../store/providers/NavigateProvider";
import CartDeleteIcon from "./CartDeleteIcon";
import { useNavigateToPage } from "../../../hooks/useNavigateToPage";

const CartProductTemplate = ({ cartArray }) => {
  const { curSymbol } = useContext(NavigateContext);
  const navigate = useNavigateToPage();

  return (
    <div id="cartProductInnerDiv">
      {cartArray.map(({ id, productImage, productName, productPrice, cartSize, cartColor, cartAmt }) => {
        return (
          <main key={id} className="cartProductMain">
            <img src={productImage} alt={productName} loading="lazy" className="cartProductImage" />
            <div className="cartProductDetails">
              <CartDeleteIcon id={id} cancelClass={"cartRemove"} />
              <section className="cartDetailsSection">
                <h1 className="cartProductName" onClick={() => navigate(`/product/${productName}`)}>{productName}</h1>
                {cartColor && <p className="cartProductText">Color: <span style={{ textTransform: "capitalize" }}>{cartColor}</span></p>}
                {cartSize && <p className="cartProductText">Size: <span style={{ textTransform: "uppercase" }}>{cartSize}</span></p>}
                <p className="cartProductText">{cartAmt} * {curSymbol}{productPrice.toFixed(2)}</p>
              </section>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export default CartProductTemplate;
