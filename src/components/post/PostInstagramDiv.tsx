"use client";
import { useState } from "react";
import PostText from "./PostText";
import { FaInstagram } from 'react-icons/fa';
import Image from "next/image";

export default function PostInstagramDiv() {
  const [socialImages, setSocialImages] = useState([
    { id: 0, image: "/assets/post-images/post-authors/author-1.jpg", display: false },
    { id: 1, image: "/assets/post-images/post-authors/author-1.jpg", display: false },
    { id: 2, image: "/assets/post-images/post-authors/author-1.jpg", display: false },
    { id: 3, image: "/assets/post-images/post-authors/author-1.jpg", display: false },
    { id: 4, image: "/assets/post-images/post-authors/author-1.jpg", display: false },
    { id: 5, image: "/assets/post-images/post-authors/author-1.jpg", display: false }
  ]);

  const changeSocialHover = (id: number, toggle: boolean) => {
    setSocialImages(prevState => prevState.map((social) => ({...social, display: social.id === id ? toggle : false})));
  };

  return (
    <div className="post-inner-div">
      <PostText text={"instagram"} />
      <div id="post-instagram-div">
        {socialImages.map(({ id, image, display }) => {
          return (
            <div key={id} onMouseEnter={() => changeSocialHover(id, true)} onMouseLeave={() => changeSocialHover(id, false)} className="post-instagram-inner-div">
              <Image src={image} height={100} width={100} loading="lazy" style={{ objectFit: "cover", height: "100%", width: "100%", position: "absolute", zIndex: "-1" }} alt="AUTHOR INSTAGRAM IMAGE" />
              {display && <FaInstagram className="post-instagram-icon" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};
