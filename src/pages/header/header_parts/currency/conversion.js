export const useConversion = () => {
  const ChangeProductDollar = (details) => {
    return {
      ...details,
      priceOne: details?.priceOne ? details.priceOne / 1000 : 0,
      priceTwo: details?.priceTwo ? details.priceTwo / 1000 : 0,
      averagePrice: details?.averagePrice ? details.averagePrice / 1000 : undefined,
      productPrice: details?.productPrice ? details.productPrice / 1000 : 0
    };
  }

  const ChangeProductNaira = (details) => {
    return {
      ...details,
      priceOne: details?.priceOne ? details.priceOne * 1000 : 0,
      priceTwo: details?.priceTwo ? details.priceTwo * 1000 : 0,
      averagePrice: details?.averagePrice ? details.averagePrice * 1000 : undefined,
      productPrice: details?.productPrice ? details.productPrice * 1000 : 0
    };
  }

  return { ChangeProductDollar, ChangeProductNaira }
};