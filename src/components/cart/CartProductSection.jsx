import { useContext } from "react";
import { NavigateContext } from "../../services/contexts/NavigateContext";
import ProductTopics from "../ui/ProductTopics";
import CartProductTemplate from "./CartProductTemplate";
import CartUpdateButton from "./CartUpdateButton";
import DefaultText from "../common/DefaultText";

const CartProductSection = () => {
  const { cartItems } = useContext(NavigateContext);
  const cartTopics = ["Products", "Price", "Quantity", "Subtotal"];

  if (cartItems.length > 0) {
    return (
      <>
        <section className="productWishlistCartSection">
          <ProductTopics productTopicsArray={cartTopics} />
          <CartProductTemplate />
        </section>
        <CartUpdateButton />
      </>
    );
  } else {
    return (
      <DefaultText textStyle={"center"} text={"No products in the cart"}/>
    );
  };
};

export default CartProductSection;