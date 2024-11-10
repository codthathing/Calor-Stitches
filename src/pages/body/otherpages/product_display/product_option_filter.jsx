import { useContext, useEffect, useState } from "react";
import { ToggleRegister } from "../../../contextpage";

export const useProductOptionFilter = () => {
  const { products, productShipValue, setProductShipValue } = useContext(ToggleRegister);

  const [presentFilterProducts, setPresentFilterProducts] = useState(products);

  const [filterOption, setFilterOption] = useState({ minPrice: productShipValue.minValue, maxValue: productShipValue.maxValue });

  useEffect(() => {
    let updatedProducts = products;
    if (filterOption.type) {
      updatedProducts = updatedProducts.filter(({ productInfo }) => productInfo.find(({ name }) => name === "CARTEGORIES").links.find(({ text }) => text === filterOption.type));
    };
    if (filterOption.maxPrice && filterOption.minPrice) {
      updatedProducts = updatedProducts.filter(({ productPrice, averagePrice }) => averagePrice ? averagePrice <= filterOption.maxPrice && averagePrice >= filterOption.minPrice : productPrice <= filterOption.maxPrice && productPrice >= filterOption.minPrice);
    };
    if (filterOption.color) {
      updatedProducts = updatedProducts.filter(({ productColors }) => productColors?.find(({ text }) => text === filterOption.color));
    };
    if (filterOption.size) {
      updatedProducts = updatedProducts.filter(({ productSizes }) => productSizes?.find(({ text }) => text === filterOption.size));
    };
    if(JSON.stringify(updatedProducts) !== JSON.stringify(presentFilterProducts)) {
      setPresentFilterProducts(updatedProducts);
    };
  }, [filterOption]);

  const ChangeProductsTypes = (id, option, text, productTypes, setProductTypes) => {
    const newProductTypes = productTypes.map((item) => {
      return { ...item, option: item.id === id ? !item.option : true, style: item.id === id };
    });
    setProductTypes(newProductTypes);
    setFilterOption({ ...filterOption, type: option ? text : "" });
  };

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), productShipValue.maxValue - 1);
    setProductShipValue({ ...productShipValue, minValue: value });
    setFilterOption(({ ...filterOption, minPrice: value }));
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), productShipValue.minValue + 1);
    setProductShipValue({ ...productShipValue, maxValue: value });
    setFilterOption(({ ...filterOption, maxPrice: value }));
  };

  const ChangeProductsColors = (id, option, text, productColors, setProductColors) => {
    const newProductColors = productColors.map((item) => {
      return { ...item, option: item.id === id ? !item.option : true, style: item.id === id };
    });
    setProductColors(newProductColors);
    setFilterOption({ ...filterOption, color: option ? text : "" });
  };

  const ChangeProductsSize = (id, option, text, productSize, setProductSize) => {
    const newProductSize = productSize.map((item) => {
      return { ...item, option: item.id === id ? !item.option : true, style: item.id === id };
    });
    setProductSize(newProductSize);
    setFilterOption({ ...filterOption, size: option ? text : "" });
  };

  return { presentFilterProducts, ChangeProductsTypes, handleMinChange, handleMaxChange, ChangeProductsColors, ChangeProductsSize }
};