import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import WishlistTemplate from "./wishlisttemplate";
import DefaultText from "../components/default_text";

const WishlistSection = () => {
  const { wishlistItems } = useContext(ToggleRegister);

  return (
    <section id="wishListItemSection">
      {wishlistItems.length > 0 ? <WishlistTemplate wishlistArray={wishlistItems} />
        : <DefaultText textStyle={"center"} text={"There are no products on the Wishlist!"} />}
    </section>
  );
};

export default WishlistSection;