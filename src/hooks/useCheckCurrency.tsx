"use client";
import { changeCurrencyToDollar, changeCurrencyToNaira } from "@/lib/utils/convertCurrency";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import { useEffect } from "react";
import { GeneralProductType } from "@/types/productType";

export const useCheckCurrency = () => {
  const { presentCurrency, setCurDetails, products, setProducts, collection, setCollection, presentFilterProducts, setPresentFilterProducts, setCurSymbol, productShipValue, setProductShipValue, defaultCurrency, setDefaultCurrency } = useNavigateContext();

  useEffect(() => {
    if (presentCurrency === "USD") {
      setCurDetails({ preNation: "United states (USD $)", preCur: "(USD $)", curFlag: "/assets/currency-flags/nigeria-flag.png", curName: "Naira ₦" });
      changeCurrencyToDollar<GeneralProductType>([{ array: products, setArray: setProducts }]);
      changeCurrencyToDollar<GeneralProductType>([{ array: collection, setArray: setCollection }]);
      changeCurrencyToDollar<GeneralProductType>([{ array: presentFilterProducts, setArray: setPresentFilterProducts }]);
      setProductShipValue({ shipFee: productShipValue.shipFee / 1000, min: productShipValue.min / 1000, max: productShipValue.max / 1000, minValue: productShipValue.minValue / 1000, maxValue: productShipValue.maxValue / 1000 });
      setCurSymbol("$");
    } else if (presentCurrency === "NGN") {
      setCurDetails({ preNation: "Nigeria (Naira ₦)", preCur: "(Naira ₦)", curFlag: "/assets/currency-flags/america-flag.png", curName: "USD $" });
      if (defaultCurrency) {
        changeCurrencyToNaira<GeneralProductType>([{ array: products, setArray: setProducts }]);
        changeCurrencyToNaira<GeneralProductType>([{ array: collection, setArray: setCollection }]);
        changeCurrencyToNaira<GeneralProductType>([{ array: presentFilterProducts, setArray: setPresentFilterProducts }]);
        setProductShipValue({ shipFee: productShipValue.shipFee * 1000, min: productShipValue.min * 1000, max: productShipValue.max * 1000, minValue: productShipValue.minValue * 1000, maxValue: productShipValue.maxValue * 1000 });
      }
      setCurSymbol("₦");
    }

    return () => setDefaultCurrency(false);
  }, [presentCurrency]);
};
