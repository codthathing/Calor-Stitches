import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import WishlistTemplate from "./wishlisttemplate";

const WishlistSection = () => {
  const { wishlistItems } = useContext(ToggleRegister);

  return (
    <section id="wishListItemSection">
      {wishlistItems.length > 0 ? <WishlistTemplate wishlistArray={wishlistItems} /> 
      : <p id="wishListDefaultText" className="defaultText">There are no products on the Wishlist!</p>}
    </section>
  );
};

export default WishlistSection;