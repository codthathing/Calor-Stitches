import PostText from "./PostText";
import PostGeneralCategories from "./PostGeneralCategories";
import PostRecentDiv from "./PostRecentDiv";
import PostInstagramDiv from "./PostInstagramDiv";
import { FiSearch } from "react-icons/fi";
import NewsHandleIcons from "../news-letter/NewsHandleIcons";

export default function PostOtherSection() {
  return (
    <section id="post-other-section">
      <div className="post-inner-div" id="post-input-div">
        <FiSearch id="post-input-icon" />
        <input type="text" placeholder="What are you looking for?" id="post-input-field" />
      </div>
      <div className="post-inner-div">  
        <PostText text={"categories"} />
        <PostGeneralCategories id={"post-categories-div"} showComma={false} tag={""} />
      </div>
      <PostRecentDiv />
      <div className="post-inner-div">
        <PostText text={"tags"} />
        <PostGeneralCategories id={"post-tag-div"} showComma={true} tag={"tag: "} />
      </div>
      <PostInstagramDiv />
      <div className="post-inner-div">
        <PostText text={"follow us"} />
        <NewsHandleIcons className={"post-shown-handle post-other-handle"} />
      </div>
    </section>
  );
};
