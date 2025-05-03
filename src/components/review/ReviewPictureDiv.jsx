import { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../../services/contexts/ReviewContext";
import ProductStockAlert from "../product-template/ProductStockAlert";

const ReviewPictureDiv = () => {
  const { wishlistStock, cutOff, productAvailable, productImage: mainImage, productImages, productNameText } = useContext(ReviewContext);

  const [productImage, setProductImage] = useState({});
  useEffect(() => {
    setProductImage({ mainImage: mainImage, imagesArray: productImages });
  }, [mainImage]);

  const updateImage = (id) => {
    const newImage = productImage.imagesArray.find((image) => image.id === id);
    const newArray = productImage.imagesArray.map((images) => {
      if (images.id === id) {
        return { ...images, style: true };
      } else {
        return { ...images, style: false };
      };
    });
    setProductImage({ mainImage: newImage.image, imagesArray: newArray });
  };

  if(productImage.imagesArray) {
    return (
      <picture id="productReviewImages">
        <ul id="productSideImages">
          {productImage.imagesArray.map(({ id, image, style }) => {
            return <li key={id} className={`productSizeList imageSize ${style && "productSizeListStyle"}`}><img src={image} loading="lazy" fetchpriority="high" alt={`${productNameText} ${id + 1}`} onClick={() => updateImage(id)} className="productSizeImage imageSize" /></li>
          })}
        </ul>
        <div id="productMainImageDiv" className="imageSize">
          <ProductStockAlert productAvailable={productAvailable} wishlistStock={wishlistStock} cutOff={cutOff} />
          <img src={productImage.mainImage} alt={`${productNameText.toUpperCase()}`} loading="lazy" fetchpriority="high" id="productMainImage imageSize" className="imageSize" />
        </div>
      </picture>
    );
  };
};

export default ReviewPictureDiv;