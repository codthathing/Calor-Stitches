import PageButtons from "../../../components/page_buttons";

const AdminProduct = () => {
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
        <div className="admin-form-div admin-group-div">
          <main className="admin-group-main">
            <span className="admin-group-name"><span className="admin-group-text admin-product-text">product images</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text admin-product-text">product images</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text admin-product-text">product images</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text admin-product-text">product images</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text admin-product-text">product images</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
          </main>
          <i class="fa-solid fa-plus admin-group-add"></i>
        </div>
        <div id="admin-product-price-div" className="admin-form-div">
          <main className="admin-product-price-main">
            <div className="admin-price-text-radio-div">
              <input type="radio" className="admin-price-radio" />
              <p className="admin-price-text">Normal price</p>
            </div>
            <div className="admin-price-inner-div">
              <input type="number" placeholder="Product price" className="admin-input admin-main-price-input" />
              <div className="admin-price-text-radio-div">
                <input type="radio" className="admin-price-radio" />
                <p className="admin-price-text">Cut off</p>
              </div>
              <input type="text" maxLength={3} placeholder="Cut off percent" id="admin-product-cutoff" className="admin-input" />
            </div>
          </main>
          <main className="admin-product-price-main">
            <div className="admin-price-text-radio-div">
              <input type="radio" className="admin-price-radio" />
              <p className="admin-price-text">Average price</p>
            </div>
            <div className="admin-price-inner-div">
              <div id="admin-price-average-div">
                <input type="number" placeholder="Price one" className="admin-input admin-average-input" />
                <input type="number" placeholder="Price two" className="admin-input admin-average-input" />
              </div>
              <input type="number" placeholder="Average price" className="admin-input" />
            </div>
          </main>
        </div>
        <div className="admin-form-div">
          <textarea className="admin-input admin-textarea" placeholder="Product description"></textarea>
        </div>
        <div className="admin-form-div">
          <input type="text" placeholder="Product status" className="admin-input" />
        </div>
        <div className="admin-form-div admin-group-div">
          <main className="admin-group-main">
            <span className="admin-group-name"><span className="admin-group-text">Olive green</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text">Navy blue</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text">Forest green</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text">Moon black</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text">Crimson</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
          </main>
          <i class="fa-solid fa-plus admin-group-add"></i>
        </div>
        <div className="admin-form-div admin-group-div">
          <main className="admin-group-main">
            <span className="admin-group-name"><span className="admin-group-text">LL</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text">XL</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text">XXL</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text">X</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text">XLL</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
          </main>
          <i class="fa-solid fa-plus admin-group-add"></i>
        </div>
        <div className="admin-form-div">
          <input type="number" placeholder="Product units" className="admin-input" />
        </div>
        <div className="admin-form-div">
          <input type="text" placeholder="SKU" className="admin-input admin-first-input" />
          <div className="admin-group-div">
            <main className="admin-group-main">
              <span className="admin-group-name"><span className="admin-group-text">OUTERWEAR</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
              <span className="admin-group-name"><span className="admin-group-text">DRESSES</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
              <span className="admin-group-name"><span className="admin-group-text">ACIVEWEAR</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
              <span className="admin-group-name"><span className="admin-group-text">COAT</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
              <span className="admin-group-name"><span className="admin-group-text">JEANS</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            </main>
            <i class="fa-solid fa-plus admin-group-add"></i>
          </div>
        </div>
        <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"admin-buttons"} text={"add new product"} />
      </form>
    </div>
  );
};

export default AdminProduct;