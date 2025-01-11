import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import CartProductDiv from "./CartProductDiv";
import { useSectionScroll } from "../../hooks/useSectionScroll";

const CartSection = () => {
  const { setCart } = useContext(NavigateContext);
  const { presentScroll: addScroll } = useSectionScroll("auto", "hidden");
  const { presentScroll: removeScroll } = useSectionScroll("hidden", "auto");


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

export default CartSection;