interface WishlistStock {
  mainClass: string;
  textClass: string;
  barClass?: string;
  showStock?: boolean;
  stockAmt: number;
  showStockBar: boolean;
  stockZero?: string;
  stockNine?: string;
  stockMore?: string;
}

const getStockDetails = (stockAmt: number, stockZero: string, stockNine: string, stockMore: string) => {
  if (stockAmt === 0) {
    return { stockText: stockZero, stockColor: "#C2272D" };
  } else if (stockAmt >= 1 && stockAmt <= 4) {
    return { stockText: stockNine, stockColor: "#FF0000" };
  } else if (stockAmt >= 5 && stockAmt <= 9) {
    return { stockText: stockNine, stockColor: "#AECA2E" };
  } else {
    return { stockText: stockMore, stockColor: "#00A849" };
  }
};

export default function WishlistStockAlert({ mainClass, textClass, barClass, showStock = true, stockAmt, showStockBar, stockZero = "Item presently not in stock", stockNine = `Only ${stockAmt} units of this item are left in stock`, stockMore = "In stock, ready to be shipped" }: WishlistStock) {
  const stockDetails = getStockDetails(stockAmt, stockZero, stockNine, stockMore);

  return (
    <main className={mainClass}>
      <p className={textClass}>
        {showStock && "Stock:"} {stockDetails.stockText}
      </p>
      {showStockBar && <div className={barClass} style={{ backgroundColor: `${stockDetails.stockColor}` }}></div>}
    </main>
  );
}
