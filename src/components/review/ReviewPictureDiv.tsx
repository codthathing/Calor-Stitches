"use client";
import { useReviewContext } from "@/store/providers/ReviewProvider";
import { useEffect, useState } from "react";
import ProductStockAlert from "../product-template/ProductStockAlert";
import Image from "next/image";

export default function ReviewPictureDiv() {
  const { wishlistStock, cutOff, productAvailable, productImage: mainImage, productImages, productNameText } = useReviewContext();

  const [productImage, setProductImage] = useState<{ mainImage: string; imagesArray: { id: number; style: boolean; image: string }[] }>({ mainImage: mainImage, imagesArray:productImages });

  const updateImage = (id: number) => {
    const newImage = productImage.imagesArray.find((image) => image.id === id) as { id: number; style: boolean; image: string };
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
            return <li key={id} className={`productSizeList imageSize ${style && "productSizeListStyle"}`}><Image src={image} height={100} width={100} loading="lazy" fetchPriority="low" alt={`${productNameText} ${id + 1}`} onClick={() => updateImage(id)} className="productSizeImage imageSize" /></li>
          })}
        </ul>
        <div id="productMainImageDiv" className="imageSize">
          <ProductStockAlert productAvailable={productAvailable} wishlistStock={wishlistStock} cutOff={cutOff} />
          <Image src={productImage.mainImage} alt={`${productNameText.toUpperCase()}`} width={75} height={100} loading="eager" fetchPriority="high" id="productMainImage imageSize" className="imageSize" />
        </div>
      </picture>
    );
  };
};
