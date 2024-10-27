import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import CartProductDiv from "./cart_product_div";
import { useScroll } from "../../usescroll";

const Cart = () => {
  const { setCart } = useContext(ToggleRegister);
  const { presentScroll: addScroll } = useScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useScroll("hidden", "auto");


  return (
    <section className="navSections">
      <main id="cartSection" ref={addScroll} className="whiteBackSections">
        <div className="navBack cartEnds" id="cartHeader">
          <i onClick={() => setCart(false)} ref={removeScroll} className="fa-solid fa-xmark navBackIcon"></i>
          <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
        </div>
        <CartProductDiv />
        <footer id="cartFooter" className="navFooter cartEnds"></footer>
      </main>
    </section>
  );
}

export default Cart;