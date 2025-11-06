import { useContext } from "react";
import { NavigateContext } from "../../store/providers/NavigateContext";
import WishlistDeleteIcon from "../features/wishlist/WishlistDeleteIcon"
import ProductPrice from "../product-template/ProductPrice";
import WishlistStockAlert from "../features/wishlist/WishlistStockAlert";
import ProductOptions from "../product-template/ProductOptions";

const WishlistProductTemplate = ({ wishlistProductArray }) => {
  const { wishlistItems } = useContext(NavigateContext);

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
            <div className="wishlistToCartDiv">
              <ProductOptions id={id} productDetails={productDetails} productName={productName} buttonClass={"wishlistToCartBtn"} itemsArray={wishlistItems} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WishlistProductTemplate;