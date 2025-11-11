"use client";
import { changeCurrencyToDollar, changeCurrencyToNaira } from "@/lib/utils/convertCurrency";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import nigeria_flag from "../assets/currency-flags/nigeria-flag.png";
import america_flag from "../../assets/currency-flags/america-flag.png";
import { useEffect } from "react";

export const useCheckCurrency = () => {
  const { presentCurrency, setCurDetails, products, setProducts, collection, setCollection, presentFilterProducts, setPresentFilterProducts, setCurSymbol, productShipValue, setProductShipValue, defaultCurrency, setDefaultCurrency } = useNavigateContext();

  useEffect(() => {
    if (presentCurrency === "USD") {
      setCurDetails({ preNation: "United states (USD $)", preCur: "(USD $)", curFlag: nigeria_flag, curName: "Naira ₦" });
      changeCurrencyToDollar([
        { array: products, setArray: setProducts },
        { array: collection, setArray: setCollection },
        { array: presentFilterProducts, setArray: setPresentFilterProducts },
      ]);
      setProductShipValue({ shipFee: productShipValue.shipFee / 1000, min: productShipValue.min / 1000, max: productShipValue.max / 1000, minValue: productShipValue.minValue / 1000, maxValue: productShipValue.maxValue / 1000 });
      setCurSymbol("$");
    } else if (presentCurrency === "NGN") {
      setCurDetails({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: america_flag, curName: "USD $" });
      if (defaultCurrency) {
        changeCurrencyToNaira([
          { array: products, setArray: setProducts },
          { array: collection, setArray: setCollection },
          { array: presentFilterProducts, setArray: setPresentFilterProducts },
        ]);
        setProductShipValue({ shipFee: productShipValue.shipFee * 1000, min: productShipValue.min * 1000, max: productShipValue.max * 1000, minValue: productShipValue.minValue * 1000, maxValue: productShipValue.maxValue * 1000 });
      }
      setCurSymbol("₦");
    }

    return () => setDefaultCurrency(false);
  }, [presentCurrency]);
}