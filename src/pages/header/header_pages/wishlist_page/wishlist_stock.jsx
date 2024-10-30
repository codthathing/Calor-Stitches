import { useEffect, useState } from "react";

const WishlistStock = ({mainClass, textClass, barClass, stockAmt, showStockBar, stockZero = "Item presently not in stock", stockNine = `Only ${stockAmt} units of this item are left in stock`, stockMore = "In stock, ready to be shipped" }) => {
  const [stockDetails, setStockDetails] = useState({ stockText: "", stockColor: "" });

  useEffect(() => {
    if (stockAmt === 0) {
      setStockDetails({ stockText: stockZero, stockColor: "#C2272D" });
    } else if (stockAmt >= 1 && stockAmt <= 4) {
      setStockDetails({ stockText: stockNine, stockColor: "#FF0000" });
    } else if (stockAmt >= 5 && stockAmt <= 9) {
      setStockDetails({ stockText: stockNine, stockColor: "#AECA2E" });
    } else {
      setStockDetails({ stockText: stockMore, stockColor: "#00A849" });
    };
  }, []);

  return (
    <main className={mainClass}>
      <p className={textClass}>Stock: {stockDetails.stockText}</p>
      {showStockBar && <div className={barClass} style={{ backgroundColor: `${stockDetails.stockColor}` }}></div>}
    </main>
  );
};

export default WishlistStock;