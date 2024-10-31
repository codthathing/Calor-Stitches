import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import ProductTopics from "../components/product_topics";
import WishlistProduct from "./wishlist_product";
import DefaultText from "../../../header/header_pages/components/default_text";

const WishlistProductSection = () => {
  const { wishlistItems } = useContext(ToggleRegister);
  const wishlistTopics = ["Products", "Price", "Stock Status"];

  return (
    <>
      {wishlistItems.length > 0 ?
        <section className="productWishlistCartSection">
          <ProductTopics productTopicsArray={wishlistTopics} />
          <WishlistProduct wishlistProductArray={wishlistItems} />
        </section>
        : <DefaultText textStyle={"center"} text={"There are no products on the Wishlist!"} />
      }
    </>
  );
};

export default WishlistProductSection;