import { useContext, useState } from "react";
import { DisplayContext } from "./productdisplay";
import { ToggleRegister } from "../../../contextpage";

const ProductSize = () => {
  const { ChangeProductsTypes } = useContext(DisplayContext);
  const { products } = useContext(ToggleRegister);

  const [productSize, setProductSize] = useState([
    { id: 0, text: "l", option: true },
    { id: 1, text: "xl", option: true },
    { id: 2, text: "xxl", option: true },
    { id: 3, text: "ll", option: true }
  ]);

  return (
    <div className="productFilterMainDivs">
      <p className="productFilterText">Size</p>
      <section className="productFilterSections">
        {productSize.map(({ id, text, option }) => {
          return (
            <div key={id} onClick={() => ChangeProductsTypes(id, option, text, productSize, setProductSize)} className="productFilterDivs">
              <input type="checkbox" checked={!option} readOnly className="filterCheckbox" />
              <p className="filterTextsLength">
                {text}
                ({products.filter(({ productSizes }) => productSizes?.find(({ text: sizeText }) => sizeText === text)).length})
              </p>
            </div>
          )
        })}
      </section>
    </div>
  );
};

export default ProductSize;