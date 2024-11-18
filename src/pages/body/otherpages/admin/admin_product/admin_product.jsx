import { createContext, useState } from "react";
import AdminGroup from "../components/admin_group";
import AdminMainPrice from "./admin_main_price";
import AdminAveragePrice from "./admin_average_price";
import PageInfo from "../../components/page_info";
import PageButtons from "../../../../components/page_buttons";
import { useShowPreload } from "../../../../components/show_preload";

export const AdminContext = createContext();
const AdminProduct = () => {
  const { HandlePreload } = useShowPreload();

  const [adminProductValues, setAdminProductValues] = useState({ product_name: "", product_price: "", cut_off: "", price_one: "", price_two: "", average_price: "", product_desc: "", product_status: "", product_unit: "", product_sku: "" })

  const HandleAdminProduct = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdminProductValues({ ...adminProductValues, [name]: value });
  };

  const [productImages, setProductImages] = useState([]);

  const [checkCutOff, setCheckCutOff] = useState(false);

  const [priceArray, setPriceArray] = useState([
    { id: 0, priceTitle: "Normal price", priceDiv: <AdminMainPrice />, showPriceDiv: true },
    { id: 1, priceTitle: "Average price", priceDiv: <AdminAveragePrice />, showPriceDiv: false }
  ]);

  const TogglePrice = (id) => {
    setPriceArray(prevState => prevState.map((price) => ({ ...price, showPriceDiv: price.id === id })));
  };

  const [productColors, setProductColors] = useState([]);

  const [productSizes, setProductSizes] = useState([]);

  const [productCategory, setProductCategory] = useState([]);

  const AdminProductResponse = [
    { check: !adminProductValues.product_name, response: "Kindly enter product name" },
    { check: productImages.length === 0, response: "Atleast one product image is required" },
    { check: priceArray[0].showPriceDiv && !adminProductValues.product_price, response: "Kindly enter the price for the product" },
    { check: priceArray[0].showPriceDiv && checkCutOff && !adminProductValues.cut_off, response: "Kindly un-click cut off if not required" },
    { check: priceArray[1].showPriceDiv && !adminProductValues.price_one, response: "Price one is a required field" },
    { check: priceArray[1].showPriceDiv && !adminProductValues.price_two, response: "Price two is a required field" },
    { check: priceArray[1].showPriceDiv && !adminProductValues.average_price, response: "Average price is a required field" },
    { check: !adminProductValues.product_desc, response: "Kindly enter the product description" },
    { check: !adminProductValues.product_unit, response: "Product unit is a required field" },
    { check: !adminProductValues.product_sku, response: "Kindly enter the product SKU" },
    { check: productCategory.length === 0, response: "Atleast one product category is required" }
  ];

  const [adminInfo, setAdminInfo] = useState({ infoBorder: "#FF0000", showInfo: false, infoArray: [] });
  const HandleAdminInfo = () => {
    const updatedInfoArray = AdminProductResponse.filter(({ check }) => check).map(({ response }) => response);
    setAdminInfo(prevState => ({ ...prevState, infoArray: updatedInfoArray }));
    HandlePreload();
    setTimeout(() => {
      if (updatedInfoArray.length > 0) {
        setAdminInfo(prevState => ({ ...prevState, showInfo: true }))
      } else {
        var options = { year: "numeric", month: "long", day: "numeric" };
        const newProduct = {
          id: Date.now(),
          productImage: productImages[0].image,
          productImages: productImages,
          productName: adminProductValues.product_name,
          ...(priceArray[0].showPriceDiv && { productPrice: Number(adminProductValues.product_price), ...(checkCutOff && { cutOff: Number(adminProductValues.cut_off) }) }),
          ...(priceArray[1].showPriceDiv && { priceOne: Number(adminProductValues.price_one), priceTwo: Number(adminProductValues.price_two), averagePrice: Number(adminProductValues.average_price) }),
          productDesc: adminProductValues.product_desc,
          productAvailable: adminProductValues.product_status || "new in",
          ...((productColors.length > 0 || productSizes.length > 0) && { productDetails: { ...(productColors.length > 0 && { cartColor: productColors[0].text }), ...(productSizes.length > 0 && { cartSize: productSizes[0].text }) } }),
          ...(productColors.length > 0 && { productColors: productColors }),
          ...(productSizes.length > 0 && { productSizes: productSizes }),
          cartAmt: 1,
          wishlistDate: new Intl.DateTimeFormat("en-US", options).format(new Date()),
          wishlistStock: Number(adminProductValues.product_unit),
          productInfo: [
            { id: 0, name: "SKU", type: "text", links: [{ id: 0, text: adminProductValues.product_sku }] },
            { id: 1, name: "CARTEGORIES", type: "link", links: productCategory }
          ]
        };
        setAdminInfo(prevState => ({ ...prevState, infoBorder: "green", showInfo: true, infoArray: ["New product added"] }));
      };
      window.scrollTo(0, 0);
    }, 2000);
  };

  return (
    <AdminContext.Provider value={{ checkCutOff, setCheckCutOff, adminProductValues, HandleAdminProduct }}>
      <div className="admin-div" id="admin-product">
        <div id="admin-information-div">
          <p className="admin-information-text">The first product image will be used has the product default image</p>
          <p className="admin-information-text">The first product color will be used has the product default color</p>
          <p className="admin-information-text">The first product size will be used has the product default size</p>
          <p className="admin-information-text">Product status will be set to NEW IN by default</p>
        </div>
        <PageInfo border={adminInfo.infoBorder} showInfo={adminInfo.showInfo} infoTextArray={adminInfo.infoArray} />
        <form className="admin-product-form">
          <div className="admin-form-div">
            <input type="text" name="product_name" value={adminProductValues.product_name} onChange={HandleAdminProduct} placeholder="Product Name" className="admin-input admin-product-input-name" />
          </div>
          <AdminGroup addTwo={true} adminArray={productImages} setAdminArray={setProductImages} textClass={"admin-product-text"} defaultText={"Product images"} />
          <div id="admin-product-price-div" className="admin-form-div">
            {priceArray.map(({ id, priceTitle, priceDiv, showPriceDiv }) => {
              return (
                <main key={id} className="admin-product-price-main">
                  <div className="admin-price-text-radio-div">
                    <input type="radio" name="price" className="admin-price-radio" defaultChecked={showPriceDiv} onClick={() => TogglePrice(id)} readOnly />
                    <p className="admin-price-text">{priceTitle}</p>
                  </div>
                  {showPriceDiv && priceDiv}
                </main>
              );
            })}
          </div>
          <div className="admin-form-div">
            <textarea className="admin-input admin-textarea" name="product_desc" value={adminProductValues.product_desc} onChange={HandleAdminProduct} placeholder="Product description"></textarea>
          </div>
          <div className="admin-form-div">
            <input type="text" name="product_status" value={adminProductValues.product_status} onChange={HandleAdminProduct} placeholder="Product status" className="admin-input" />
          </div>
          <AdminGroup addText={true} style={true} color={true} defaultText={"Product colors"} placeholder={"Add color"} adminArray={productColors} setAdminArray={setProductColors} />
          <AdminGroup addText={true} style={true} defaultText={"Product sizes"} placeholder={"Add size"} adminArray={productSizes} setAdminArray={setProductSizes} />
          <div className="admin-form-div">
            <input type="number" name="product_unit" value={adminProductValues.product_unit} onChange={HandleAdminProduct} placeholder="Product units" className="admin-input" />
          </div>
          <div className="admin-form-div">
            <input type="text" name="product_sku" value={adminProductValues.product_sku} onChange={HandleAdminProduct} placeholder="SKU" className="admin-input admin-first-input" />
            <AdminGroup addText={true} defaultText={"Product categories"} placeholder={"Add category"} adminArray={productCategory} setAdminArray={setProductCategory} />
          </div>
          <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"admin-buttons"} buttonFunction={HandleAdminInfo} text={"add new product"} />
        </form>
      </div>
    </AdminContext.Provider>
  );
};

export default AdminProduct;