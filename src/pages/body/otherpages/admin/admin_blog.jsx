import AdminGroup from "./components/admin_group";
import PageButtons from "../../../components/page_buttons";
import { useState } from "react";

const AdminBlog = () => {
  const [blogImage, setBlogImage] = useState([]);

  const [blogCategory, setBlogCategory] = useState([]);

  return (
    <div className="admin-div" id="admin-blog">
      <form className="admin-post-form">
        <AdminGroup addOne={true} textClass={"admin-product-text"} adminArray={blogImage} setAdminArray={setBlogImage} defaultText={"Blog image"} placeholder={"Add image"} />
        <AdminGroup addText={true} style={true} defaultText={"Blog categories"} placeholder={"Add category"} adminArray={blogCategory} setAdminArray={setBlogCategory} />
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