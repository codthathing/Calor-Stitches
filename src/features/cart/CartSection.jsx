import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import CartProductDiv from "./CartProductDiv";

const CartSection = () => {
  const { setCart } = useContext(NavigateContext);

  return (
    <section className="navSections">
      <main id="cartSection" className="whiteBackSections">
        <div className="cartEnds" id="cartHeader">
          <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
          <i onClick={() => setCart(false)} className="fa-solid fa-xmark navBackIcon"></i>
        </div>
        <CartProductDiv />
        <footer id="cartFooter" className="cartEnds"></footer>
      </main>
    </section>
  );
};

export default CartSection;
