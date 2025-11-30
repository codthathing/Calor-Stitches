import { useContext } from "react";
import { NavigateContext } from "../../../store/providers/NavigateProvider";
import CartProductDiv from "./CartProductDiv";
import { FaTimes } from "react-icons/fa";

export default function CartPage() {
  const { setCart } = useContext(NavigateContext);

  return (
    <section className="navSections">
      <main id="cartSection" className="whiteBackSections">
        <div className="cartEnds" id="cartHeader">
          <h1 className="navHeadText" id="cartHead">Shopping Cart</h1>
          <FaTimes onClick={() => setCart(false)} className="navBackIcon" />
        </div>
        <CartProductDiv />
        <footer id="cartFooter" className="cartEnds"></footer>
      </main>
    </section>
  );
}
