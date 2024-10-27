export const useCalTotal = (items) => {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].averagePrice ? items[i].averagePrice * items[i].cartAmt : items[i].productPrice * items[i].cartAmt;
  }
  return { total };
}