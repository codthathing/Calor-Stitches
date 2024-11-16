import PageButtons from "../../../components/page_buttons";

const AdminBlog = () => {
  return (
    <div className="admin-div" id="admin-blog">
      <form className="admin-post-form">
        <div className="admin-form-div admin-group-div">
          <span className="admin-group-name"><span className="admin-group-text admin-product-text">blog image</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
          <i class="fa-solid fa-plus admin-group-add"></i>
        </div>
        <div className="admin-form-div admin-group-div">
          <main className="admin-group-main">
            <span className="admin-group-name"><span className="admin-group-text admin-product-text">INDUSTRY</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
            <span className="admin-group-name"><span className="admin-group-text admin-product-text">GOLD</span><i className="fa-solid fa-xmark admin-group-remove"></i></span>
          </main>
          <i class="fa-solid fa-plus admin-group-add"></i>
        </div>
        <div className="admin-form-div">
          <input type="text" placeholder="Author name" className="admin-input admin-first-input admin-product-input-name" />
          <textarea placeholder="About the author" className="admin-input admin-textarea"></textarea>
        </div>
        <div className="admin-form-div">
          <input type="text" placeholder="Post topic" className="admin-input admin-first-input admin-product-input-name" />
          <textarea placeholder="Post paragraph" className="admin-input admin-textarea"></textarea>
        </div>
        <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"admin-buttons"} text={"post blog"} />
      </form>
    </div>
  );
};

export default AdminBlog;