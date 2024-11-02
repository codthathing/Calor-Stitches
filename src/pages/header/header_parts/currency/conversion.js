export const useConversion = () => {
  const ChangeProductDollar = (productsArray = [{}]) => {
    for (let i = 0; i < productsArray.length; i++) {
      const updatedValues = productsArray[i].array.map((details) => {
        return {
          ...details,
          priceOne: details?.priceOne ? details.priceOne / 1000 : 0,
          priceTwo: details?.priceTwo ? details.priceTwo / 1000 : 0,
          averagePrice: details?.averagePrice ? details.averagePrice / 1000 : undefined,
          productPrice: details?.productPrice ? details.productPrice / 1000 : 0
        };
      });
      productsArray[i].setArray(updatedValues);
    };
  }

  const ChangeProductNaira = (productsArray = [{}]) => {
    for (let i = 0; i < productsArray.length; i++) {
      const updatedValues = productsArray[i].array.map((details) => {
        return {
          ...details,
          priceOne: details?.priceOne ? details.priceOne * 1000 : 0,
          priceTwo: details?.priceTwo ? details.priceTwo * 1000 : 0,
          averagePrice: details?.averagePrice ? details.averagePrice * 1000 : undefined,
          productPrice: details?.productPrice ? details.productPrice * 1000 : 0
        };
      });
      productsArray[i].setArray(updatedValues);
    };
  }

  return { ChangeProductDollar, ChangeProductNaira }
};