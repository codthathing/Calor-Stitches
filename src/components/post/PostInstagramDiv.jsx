import { useState } from "react";
import post_image from "../../assets/post-images/post-authors/author-1.jpg";
import PostText from "./PostText";
import { FaInstagram } from 'react-icons/fa';

const PostInstagramDiv = () => {
  const [socialImages, setSocialImages] = useState([
    { id: 0, image: post_image, display: false },
    { id: 1, image: post_image, display: false },
    { id: 2, image: post_image, display: false },
    { id: 3, image: post_image, display: false },
    { id: 4, image: post_image, display: false },
    { id: 5, image: post_image, display: false }
  ]);

  const changeSocialHover = (id, toggle) => {
    setSocialImages(prevState => prevState.map((social) => ({...social, display: social.id === id ? toggle : false})));
  };

  return (
    <div className="post-inner-div">
      <PostText text={"instagram"} />
      <div id="post-instagram-div">
        {socialImages.map(({ id, image, display }) => {
          return (
            <div key={id} onMouseEnter={() => changeSocialHover(id, true)} onMouseLeave={() => changeSocialHover(id, false)} style={{ backgroundImage: `url(${image})` }} className="post-instagram-inner-div">
              {display && <FaInstagram className="post-instagram-icon" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostInstagramDiv;