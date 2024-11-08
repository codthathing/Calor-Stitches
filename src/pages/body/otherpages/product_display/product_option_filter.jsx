import { useContext, useEffect, useState } from "react";
import { ToggleRegister } from "../../../contextpage";

export const useProductOptionFilter = (setPresentFilterProducts) => {
  const { products } = useContext(ToggleRegister);

  const [filterOption, setFilterOption] = useState({});

  useEffect(() => {
    console.log(filterOption);
    let updatedProducts = products;
    if (filterOption.type) {
      updatedProducts = updatedProducts.filter(({ productInfo }) => productInfo.find(({ name }) => name === "CARTEGORIES").links.find(({ text }) => text === filterOption.type));
    };
    if (filterOption.maxPrice && filterOption.minPrice) {
      updatedProducts = updatedProducts.filter(({ price }) => price <= filterOption.maxPrice && price >= filterOption.minPrice);
    };
    if (filterOption.color) {
      updatedProducts = updatedProducts.filter(({ productColors }) => productColors?.find(({ text }) => text === filterOption.color));
    };
    if (filterOption.size) {
      // updatedProducts = updatedProducts.filter(({ productSizes }) => productSizes?.find(({ text }) => text === filterOption.size));
      console.log(products)
    };
    setPresentFilterProducts(updatedProducts);
  }, [filterOption]);

  const ChangeProductsTypes = (id, option, text, productTypes, setProductTypes) => {
    const newProductTypes = productTypes.map((item) => {
      return { ...item, option: item.id === id ? !item.option : true };
    });
    setProductTypes(newProductTypes);
    setFilterOption({ ...filterOption, type: option ? text : "" });
  };

  const ChangeProductsSize = (id, option, text, productSize, setProductSize) => {
    const newProductSize = productSize.map((item) => {
      return { ...item, option: item.id === id ? !item.option : true };
    });
    setProductSize(newProductSize);
    setFilterOption({ ...filterOption, size: option ? text : ""});
  };

  return { ChangeProductsTypes, ChangeProductsSize }
};