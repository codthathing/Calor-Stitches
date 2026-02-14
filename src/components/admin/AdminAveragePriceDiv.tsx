import { ChangeEvent } from "react";

type AdminAveragePriceType = {
  adminProductValues: { product_name: string; product_price: string; cut_off: string; price_one: string; price_two: string; average_price: string; product_desc: string; product_status: string; product_unit: string; product_sku: string };
  handleAdminProduct: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function AdminAveragePriceDiv({ adminProductValues, handleAdminProduct }: AdminAveragePriceType) {
  return (
    <div className="admin-price-inner-div">
      <div id="admin-price-average-div">
        <input type="number" name="price_one" value={adminProductValues.price_one} onChange={handleAdminProduct} placeholder="Price one" className="admin-input admin-average-input" />
        <input type="number" name="price_two" value={adminProductValues.price_two} onChange={handleAdminProduct} placeholder="Price two" className="admin-input admin-average-input" />
      </div>
      <input type="number" name="average_price" value={adminProductValues.average_price} onChange={handleAdminProduct} placeholder="Average price" className="admin-input" />
    </div>
  );
};
