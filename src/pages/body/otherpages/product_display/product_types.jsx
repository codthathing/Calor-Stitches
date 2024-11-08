import { useContext, useState } from "react";
import { DisplayContext } from "./productdisplay";
import { ToggleRegister } from "../../../contextpage";

const ProductTypes = () => {
  const { ChangeProductsTypes } = useContext(DisplayContext);
  const { products } = useContext(ToggleRegister);

  const [productTypes, setProductTypes] = useState([
    { id: 0, text: "t-shirts", option: true },
    { id: 1, text: "activewear", option: true },
    { id: 2, text: "jeans", option: true },
    { id: 3, text: "outerwear", option: true }
  ]);

  return (
    <div className="productFilterMainDivs">
      <p className="productFilterText">Product Type</p>
      <section className="productFilterSections">
        {productTypes.map(({ id, text, option }) => {
          return (
            <div key={id} onClick={() => ChangeProductsTypes(id, option, text, productTypes, setProductTypes)} className="productFilterDivs">
              <input type="checkbox" checked={!option} readOnly className="filterCheckbox" />
              <p className="filterTextsLength">
                {text}
                ({products.filter(({ productInfo }) => productInfo.find(({ name }) => name === "CARTEGORIES").links.find(({ text: cartgory }) => cartgory === text)).length})
              </p>
            </div>
          )
        })}
      </section>
    </div>
  );
};

export default ProductTypes;