import { useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateContext";
import ProductTopics from "../ui/ProductTopics";
import WishlistProductTemplate from "./WishlistProductTemplate";
import DefaultText from "../common/DefaultText";

const WishlistProductSection = () => {
  const { wishlistItems } = useContext(NavigateContext);
  const wishlistTopics = ["Products", "Price", "Stock Status"];

  return (
    <>
      {wishlistItems.length > 0 ?
        <section className="productWishlistCartSection">
          <ProductTopics productTopicsArray={wishlistTopics} />
          <WishlistProductTemplate wishlistProductArray={wishlistItems} />
        </section>
        : <DefaultText textStyle={"center"} text={"There are no products on the Wishlist!"} />
      }
    </>
  );
};

export default WishlistProductSection;