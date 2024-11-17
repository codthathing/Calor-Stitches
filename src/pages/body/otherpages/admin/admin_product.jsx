import { useState } from "react";
import AdminGroup from "./components/admin_group";
import PageButtons from "../../../components/page_buttons";

const AdminProduct = () => {
  const [productImages, setProductImages] = useState([]);

  const MainPriceDiv = () => {
    const [checkCutOff, setCheckCutOff] = useState(false);

    return (
      <div className="admin-price-inner-div">
        <input type="number" placeholder="Product price" className="admin-input admin-main-price-input" />
        <div className="admin-price-text-radio-div">
          <input type="radio" name="cutoff" checked={checkCutOff} onChange={() => setCheckCutOff(!checkCutOff)} onClick={() => setCheckCutOff(!checkCutOff)} className="admin-price-radio" />
          <p className="admin-price-text">Cut off</p>
        </div>
        {checkCutOff && <input type="text" maxLength={3} placeholder="Cut off percent" id="admin-product-cutoff" className="admin-input" />}
      </div>
    );
  };

  const AveragePriceDiv = () => {
    return (
      <div className="admin-price-inner-div">
        <div id="admin-price-average-div">
          <input type="number" placeholder="Price one" className="admin-input admin-average-input" />
          <input type="number" placeholder="Price two" className="admin-input admin-average-input" />
        </div>
        <input type="number" placeholder="Average price" className="admin-input" />
      </div>
    );
  };

  const [priceArray, setPriceArray] = useState([
    { id: 0, priceTitle: "Normal price", priceDiv: <MainPriceDiv />, showPriceDiv: true },
    { id: 1, priceTitle: "Average price", priceDiv: <AveragePriceDiv />, showPriceDiv: false }
  ]);

  const [selectedPriceId, setSelectedPriceId] = useState(0);

  const TogglePayment = (id) => {
    setPriceArray(prevState => prevState.map((price) => ({...price, showPriceDiv: price.id === id})));
    setSelectedPriceId(id);
  };

  const [productColors, setProductColors] = useState([]);

  const [productSizes, setProductSizes] = useState([]);

  const [productCategory, setProductCategory] = useState([]);

  return (
    <div className="admin-div" id="admin-product">
      <div id="admin-information-div">
        <p className="admin-information-text">The first product image will be used has the product default image</p>
        <p className="admin-information-text">The first product color will be used has the product default color</p>
        <p className="admin-information-text">The first product size will be used has the product default size</p>
      </div>
      <form className="admin-product-form">
        <div className="admin-form-div">
          <input type="text" placeholder="Product Name" className="admin-input admin-product-input-name" />
        </div>
        <AdminGroup addTwo={true} adminArray={productImages} setAdminArray={setProductImages} textClass={"admin-product-text"} defaultText={"Product images"} />
        <div id="admin-product-price-div" className="admin-form-div">
          {priceArray.map(({ id, priceTitle, priceDiv, showPriceDiv }) => {
            return (
              <main key={id} className="admin-product-price-main">
                <div className="admin-price-text-radio-div">
                  <input type="radio" name="price" className="admin-price-radio" defaultChecked={selectedPriceId === id} onClick={() => TogglePayment(id)} readOnly />
                  <p className="admin-price-text">{priceTitle}</p>
                </div>
                {showPriceDiv && priceDiv}
              </main>
            );
          })}
        </div>
        <div className="admin-form-div">
          <textarea className="admin-input admin-textarea" placeholder="Product description"></textarea>
        </div>
        <div className="admin-form-div">
          <input type="text" placeholder="Product status" className="admin-input" />
        </div>
        <AdminGroup addText={true} style={true} color={true} defaultText={"Product colors"} placeholder={"Add color"} adminArray={productColors} setAdminArray={setProductColors} />
        <AdminGroup addText={true} style={true} defaultText={"Product sizes"} placeholder={"Add size"} adminArray={productSizes} setAdminArray={setProductSizes} />
        <div className="admin-form-div">
          <input type="number" placeholder="Product units" className="admin-input" />
        </div>
        <div className="admin-form-div">
          <input type="text" placeholder="SKU" className="admin-input admin-first-input" />
          <AdminGroup addText={true} defaultText={"Product categories"} placeholder={"Add category"} adminArray={productCategory} setAdminArray={setProductCategory} />
        </div>
        <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"admin-buttons"} text={"add new product"} />
      </form>
    </div>
  );
};

export default AdminProduct;