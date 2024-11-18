import { useContext } from "react";
import { AdminContext } from "./admin_product";

const AdminAveragePrice = () => {
  const { adminProductValues, HandleAdminProduct } = useContext(AdminContext);

  return (
    <div className="admin-price-inner-div">
      <div id="admin-price-average-div">
        <input type="number" name="price_one" value={adminProductValues.price_one} onChange={HandleAdminProduct} placeholder="Price one" className="admin-input admin-average-input" />
        <input type="number" name="price_two" value={adminProductValues.price_two} onChange={HandleAdminProduct} placeholder="Price two" className="admin-input admin-average-input" />
      </div>
      <input type="number" name="average_price" value={adminProductValues.average_price} onChange={HandleAdminProduct} placeholder="Average price" className="admin-input" />
    </div>
  );
};

export default AdminAveragePrice;