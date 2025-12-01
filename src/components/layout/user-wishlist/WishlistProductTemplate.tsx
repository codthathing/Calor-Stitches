import WishlistDeleteIcon from "./WishlistDeleteIcon";
import WishlistStockAlert from "./WishlistStockAlert";
import ProductPrice from "@/components/product-template/ProductPrice";
import Image from "next/image";
import UserWishlistTemplateName from "@/components/layout/user-wishlist/UserWishlistTemplateName";
import { WishlistProductType } from "@/types/productType";
import UserWishlistTemplateOptions from "@/components/layout/user-wishlist/UserWishlistTemplateOptions";

export default function WishlistProductTemplate({ wishlistItems }: { wishlistItems: WishlistProductType[] }) {
  return (
    <>
      {wishlistItems.map(({ id, productImage, productName, cutOff, productPrice, priceOne, priceTwo, averagePrice, wishlistDate, wishlistStock, productDetails }) => {
        return (
          <div key={id} className="wishListDiv">
            <div className="wishlist-icon-image-div">
              <WishlistDeleteIcon id={id} cancelClass={"delWishListIcon"} />
              <Image src={productImage} alt={productName} loading="lazy" className="wishListImage" />
            </div>
            <div className="wishListDetails">
              <UserWishlistTemplateName productName={productName} />
              <ProductPrice priceDivClass={""} productPriceClass={"#222222"} priceClass={"wishListPrice wishListTexts"} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
              <p className="wishListDate wishListTexts">{wishlistDate}</p>
            </div>
            <div className="wishListAvailDiv">
              <WishlistStockAlert mainClass={"wishListAvailMain"} textClass={"wishListAvail wishListTexts"} barClass={"wishListAvailBar"} stockAmt={wishlistStock} showStockBar={true} />
              <UserWishlistTemplateOptions id={id} productName={productName} productDetails={productDetails} wishlistItems={wishlistItems} />
            </div>
          </div>
        );
      })}
    </>
  );
};
