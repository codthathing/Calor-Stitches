import { useContext } from "react";
import { AdminContext } from "../../services/contexts/AdminContext";

const AdminMainPriceDiv = () => {
  const { checkCutOff, setCheckCutOff, adminProductValues, handleAdminProduct } = useContext(AdminContext);

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

export default AdminMainPriceDiv;
