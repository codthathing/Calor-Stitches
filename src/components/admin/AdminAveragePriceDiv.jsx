import { useContext } from "react";
import { AdminContext } from "../../services/contexts/AdminContext";

const AdminAveragePriceDiv = () => {
  const { adminProductValues, handleAdminProduct } = useContext(AdminContext);

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

export default AdminAveragePriceDiv;
