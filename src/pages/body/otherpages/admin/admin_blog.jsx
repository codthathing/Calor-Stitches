import AdminGroup from "./components/admin_group";
import PageButtons from "../../../components/page_buttons";
import { useState } from "react";
import { useShowPreload } from "../../../components/show_preload";
import PageInfo from "../components/page_info";

const AdminBlog = () => {
  const { HandlePreload } = useShowPreload();

  const [adminBlogValues, setAdminBlogValues] = useState({ author_name: "", author_desc: "", post_topic: "", post_paragraph: "" });
  const HandleBlogValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAdminBlogValues({ ...adminBlogValues, [name]: value });
  };

  const [blogImage, setBlogImage] = useState([]);

  const [blogCategory, setBlogCategory] = useState([]);

  const [authorImage, setAuthorImage] = useState([]);

  const AdminBlogResponse = [
    { check: blogImage.length === 0, response: "Kindly update the image of the post" },
    { check: blogCategory.length === 0, response: "Atleast one blog category is required" },
    { check: !adminBlogValues.post_topic, response: "The post topic is required" },
    { check: !adminBlogValues.post_paragraph, response: "The post paragraph is required" },
    { check: authorImage.length === 0, response: "Kindly update the profile of the author" },
    { check: !adminBlogValues.author_name, response: "Kindly update the name of the author" },
    { check: !adminBlogValues.author_desc, response: "Kindly give a brief description of the author" }
  ];

  const [adminInfo, setAdminInfo] = useState({ infoBorder: "#FF0000", showInfo: false, infoArray: [] });
  const HandleAdminInfo = () => {
    const updatedInfoArray = AdminBlogResponse.filter(({ check }) => check).map(({ response }) => response);
    setAdminInfo(prevState => ({ ...prevState, infoArray: updatedInfoArray }));
    HandlePreload();
    setTimeout(() => {
      if (updatedInfoArray.length > 0) {
        setAdminInfo(prevState => ({ ...prevState, showInfo: true }))
      } else {
        var options = { year: "numeric", month: "long", day: "numeric" };
        const newBlog = {
          id: Date.now(),
          postImage: blogImage[0].image,
          postDetails: [
            { id: 0, text: new Intl.DateTimeFormat("en-US", options).format(new Date()), style: true },
            { id: 1, inner_text: blogCategory },
            { id: 2, text: `comment: ${0}`, style: false }
          ],
          postAuthor: { profile_picture: authorImage[0].image, name: adminBlogValues.author_name, description: adminBlogValues.author_desc },
          postHead: adminBlogValues.post_topic,
          postParagraph: adminBlogValues.post_paragraph
        };
        setAdminInfo(prevState => ({...prevState, infoBorder: "green", showInfo: true, infoArray: ["New blog uploaded"] }));
      };
      window.scrollTo(0, 0);
    }, 2000);
  };

  return (
    <div className="admin-div" id="admin-blog">
      <PageInfo border={adminInfo.infoBorder} showInfo={adminInfo.showInfo} infoTextArray={adminInfo.infoArray} />
      <form className="admin-post-form">
        <AdminGroup addOne={true} textClass={"admin-product-text"} adminArray={blogImage} setAdminArray={setBlogImage} defaultText={"Blog image"} placeholder={"Add image"} />
        <AdminGroup addText={true} style={true} defaultText={"Blog categories"} placeholder={"Add category"} adminArray={blogCategory} setAdminArray={setBlogCategory} />
        <div className="admin-form-div">
          <input type="text" name="author_name" value={adminBlogValues.author_name} onChange={HandleBlogValues} placeholder="Author name" className="admin-input admin-first-input admin-product-input-name" />
          <textarea placeholder="About the author" name="author_desc" value={adminBlogValues.author_desc} onChange={HandleBlogValues} className="admin-input admin-textarea"></textarea>
        </div>
        <AdminGroup addOne={true} textClass={"admin-product-text"} adminArray={authorImage} setAdminArray={setAuthorImage} defaultText={"Author image"} placeholder={"Add image"} />
        <div className="admin-form-div">
          <input type="text" name="post_topic" value={adminBlogValues.post_topic} onChange={HandleBlogValues} placeholder="Post topic" className="admin-input admin-first-input admin-product-input-name" />
          <textarea placeholder="Post paragraph" name="post_paragraph" value={adminBlogValues.post_paragraph} onChange={HandleBlogValues} className="admin-input admin-textarea"></textarea>
        </div>
        <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"admin-buttons"} buttonFunction={HandleAdminInfo} text={"post blog"} />
      </form>
    </div>
  );
};

export default AdminBlog;