import { useContext } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";

const CartTemplate = ({ cartArray }) => {
  const { curSymbol, cartItems, setCartItems } = useContext(ToggleRegister);
  const RemoveCartItem = (id) => {
    let remainderItems = cartItems.filter((items) => items.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(remainderItems));
    setCartItems(remainderItems);
  };

  return (
    <div id="cartProductInnerDiv">
      {cartArray.map(({ id, productImage, productName, averagePrice, productPrice, productDetails, cartAmt }) => {
        return (
          <main key={id} className="cartProductMain">
            <img src={productImage} alt={productName} className="cartProductImage" />
            <div className="cartProductDetails">
              <i className="fa-solid fa-xmark cartRemove" onClick={() => RemoveCartItem(id)}></i>
              <section className="cartDetailsSection">
                <h1 className="cartProductName">
                  <Link key={id} className="productNameText" to={`/product/${productName}`}>
                    {productName}
                  </Link>
                </h1>
                {productDetails?.cartColor && <p className="cartProductText cartProductColor">Color: {productDetails.cartColor}</p>}
                {productDetails?.cartSize && <p className="cartProductText cartProductSize">Size: {productDetails.cartSize}</p>}
                <p className="cartProductText cartProductAmt">
                  {cartAmt} * {averagePrice ? `${curSymbol}${averagePrice.toFixed(2)}` : `${curSymbol}${productPrice.toFixed(2)}`}
                </p>
              </section>
            </div>
          </main>
        );
      })}
    </div>
  );
}

export default CartTemplate;