import { useState } from "react";
import post_image from "../../../../../asset/images-icons/displayImages/design_twentytwo.jpeg";
import instagram_icon from "../../../../../asset/images-icons/handleIcons/iconmonstr-instagram-11-240.png";
import PostText from "./post_text";

const PostInstagram = () => {
  const [socialImages, setSocialImages] = useState([
    { id: 0, image: post_image, display: false },
    { id: 1, image: post_image, display: false },
    { id: 2, image: post_image, display: false },
    { id: 3, image: post_image, display: false },
    { id: 4, image: post_image, display: false },
    { id: 5, image: post_image, display: false }
  ]);

  const ChangeSocialHover = (id, toggle) => {
    setSocialImages(prevState => prevState.map((social) => ({...social, display: social.id === id ? toggle : false})));
  };

  return (
    <div className="post-inner-div">
      <PostText text={"instagram"} />
      <div id="post-instagram-div">
        {socialImages.map(({ id, image, display }) => {
          return (
            <div key={id} onMouseEnter={() => ChangeSocialHover(id, true)} onMouseLeave={() => ChangeSocialHover(id, false)} style={{ backgroundImage: `url(${image})` }} className="post-instagram-inner-div">
              {display && <img src={instagram_icon} alt="instagram-icon" className="post-instagram-icon" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostInstagram;