import { ChangeEvent, Dispatch, SetStateAction } from "react";

type AdminMainPriceType = {
  checkCutOff: boolean;
  setCheckCutOff: Dispatch<SetStateAction<boolean>>;
  adminProductValues: { product_name: string; product_price: string; cut_off: string; price_one: string; price_two: string; average_price: string; product_desc: string; product_status: string; product_unit: string; product_sku: string };
  handleAdminProduct: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function AdminMainPriceDiv({ checkCutOff, setCheckCutOff, adminProductValues, handleAdminProduct }: AdminMainPriceType) {
  return (
    <div className="admin-price-inner-div">
      <input type="number" name="product_price" value={adminProductValues.product_price} onChange={handleAdminProduct} placeholder="Product price" className="admin-input admin-main-price-input" />
      <div className="admin-price-text-radio-div">
        <input type="radio" name="cutoff" checked={checkCutOff} readOnly onClick={() => setCheckCutOff(!checkCutOff)} className="admin-price-radio" />
        <p className="admin-price-text">Cut off</p>
      </div>
      {checkCutOff && <input name="cut_off" value={adminProductValues.cut_off} onChange={handleAdminProduct} type="text" maxLength={3} placeholder="Cut off percent" id="admin-product-cutoff" className="admin-input" />}
    </div>
  );
};
