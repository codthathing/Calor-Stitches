import { useNavigateContext } from "@/store/providers/NavigateProvider";
import WishlistDeleteIcon from "../layout/user-wishlist/WishlistDeleteIcon";
import WishlistStockAlert from "../layout/user-wishlist/WishlistStockAlert";
import ProductPrice from "../product-template/ProductPrice";
import { WishlistProductType } from "@/types/productType";
import WishlistProductOptions from "./WishlistProductOptions";

export default function WishlistProductTemplate({ wishlistProductArray } : { wishlistProductArray: WishlistProductType[] }) {
  return (
    <>
      {wishlistProductArray.map(({ id, productImage, productName, wishlistDate, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock, productDetails }) => {
        return (
          <div className="wishlistCartDiv" key={id}>
            <div className="wishlistCartIconImageTextDiv">
              <WishlistDeleteIcon id={id} cancelClass={"wishlistCartDeleteIcon"} />
              <div className="wishlistCartImageNameDiv">
                <img src={productImage} alt={productName} loading="lazy" className="wishlistCartMainImage" />
                <div className="wishlistNameDateDiv">
                  <p className="wishlistCartName">{productName}</p>
                  <p className="wishlistDate">{wishlistDate}</p>
                </div>
              </div>
            </div>
            <div className="wishlistCartPriceValueDiv">
              <p className="wishlistCartPriceText">Price</p>
              <ProductPrice priceDivClass={""} productPriceClass={"#222222"} priceClass={"wishlistCartPriceValue"} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
            </div>
            <div className="wishlistStatusDiv">
              <p className="wishlistStatusText">Stock Status</p>
              <WishlistStockAlert mainClass={""} textClass={"wishlistStatus"} showStock={false} showStockBar={false} stockAmt={wishlistStock} stockZero="No unit present" stockNine={`${wishlistStock} units left`} stockMore="In stock" />
            </div>
            <WishlistProductOptions id={id} productDetails={productDetails} productName={productName} />
          </div>
        );
      })}
    </>
  );
};
