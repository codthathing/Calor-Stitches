import { GeneralProductType } from "@/types/productType";
import Image from "next/image";
import AddToWishList from "./AddToWishlist";
import ProductPrice from "./ProductPrice";
import ProductStockAlertWrapper from "../layout/product-template/ProductStockAlertWrapper";
import ProductTemplateFooter from "../layout/product-template/ProductTemplateFooter";

export default function ProductTemplate({ productArray }: { productArray: GeneralProductType[] }) {
  return (
    <main id="mainProduct">
      {productArray.map(({ id, productAvailable, productImage, productName, cutOff, productPrice, priceOne, priceTwo, averagePrice, productDetails, wishlistStock }) => {
        return (
          <div className="productDiv" key={id}>
            <div className="productInnerDiv">
              <Image src={productImage} loading="lazy" style={{ objectFit: "cover", width: "100%", height: "100%", position: "absolute", zIndex: "-1" }} alt={productName.toUpperCase()} />
              <ProductStockAlertWrapper productName={productName} productAvailable={productAvailable} wishlistStock={wishlistStock} cutOff={cutOff} />
              <div className="optionBtnsDiv">
                <div className="optionDiv optionDivWishlist">
                  <AddToWishList id={id} showText={false} showIcon={true} />
                </div>
                <ProductTemplateFooter id={id} productDetails={productDetails} productName={productName} />
              </div>
            </div>
            <section className="productNamePrice">
              <p className="productName">{productName}</p>
              <ProductPrice priceDivClass={"center"} productPriceClass={"#FF0000"} priceClass={"productPrice"} cutOff={cutOff} productPrice={productPrice} averagePrice={averagePrice} priceOne={priceOne} priceTwo={priceTwo} />
            </section>
          </div>
        );
      })}
    </main>
  );
};
