import { useContext } from "react";
import { ToggleRegister } from "../../../contextpage";
import WishlistDelete from "../../../header/header_pages/wishlist_page/wishlist_delete";
import ProductPrice from "../../frontpage/innerpages/products_func/product_price";
import WishlistStock from "../../../header/header_pages/wishlist_page/wishlist_stock";
import AddToCart from "../../frontpage/innerpages/products_func/addtocart";

const WishlistProduct = ({ wishlistProductArray }) => {
  const { wishlistItems } = useContext(ToggleRegister);

  return (
    <>
      {wishlistProductArray.map(({ id, productImage, productName, wishlistDate, cutOff, productPrice, averagePrice, priceOne, priceTwo, wishlistStock }) => {
        return (
          <div className="wishlistCartDiv" key={id}>
            <div className="wishlistCartIconImageTextDiv">
              <WishlistDelete id={id} cancelClass={"wishlistCartDeleteIcon"} />
              <div className="wishlistCartImageNameDiv">
                <img src={productImage} alt="" className="wishlistCartMainImage" />
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
              <WishlistStock mainClass={""} textClass={"wishlistStatus"} showStockBar={false} stockAmt={wishlistStock} stockZero="No unit present" stockNine={`${wishlistStock} units left`} stockMore="In stock" />
            </div>
            <div className="wishlistToCartDiv">
              <button className="wishlistToCartBtn"><AddToCart id={id} buttonClass={""} itemsArray={wishlistItems} /></button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default WishlistProduct;