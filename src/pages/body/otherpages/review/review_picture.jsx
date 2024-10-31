import { useContext, useEffect, useState } from "react";
import { ReviewContext } from "./productreview";
import ProductAvail from "../../frontpage/innerpages/products_func/product_avail";

const ReviewPicture = ({ mainImage, imagesArray }) => {
  const { wishlistStock, cutOff, productAvailable } = useContext(ReviewContext);

  const [productImage, setProductImage] = useState({ mainImage: mainImage, imagesArray: imagesArray });
  useEffect(() => {
    setProductImage({ mainImage: mainImage, imagesArray: imagesArray });
  }, []);

  const UpdateImage = (id) => {
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

  return (
    <picture id="productReviewImages">
      <ul id="productSideImages">
        {productImage.imagesArray.map(({ id, image, style }) => {
          return <li key={id} className={`productSizeList imageSize ${style && "productSizeListStyle"}`}><img src={image} onClick={() => UpdateImage(id)} className="productSizeImage imageSize" /></li>
        })}
      </ul>
      <div id="productMainImageDiv" className="imageSize">
        <ProductAvail productAvailable={productAvailable} wishlistStock={wishlistStock} cutOff={cutOff} />
        <img src={productImage.mainImage} alt="" id="productMainImage imageSize" className="imageSize" />
      </div>
    </picture>
  );
};

export default ReviewPicture;