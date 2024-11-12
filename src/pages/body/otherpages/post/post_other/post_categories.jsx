import { Link } from "react-router-dom";

const PostCategories = ({ id, showComma, tag }) => {
  const postCategoriesArray = [
    { id: 0, text: "denium", style: true },
    { id: 1, text: "lifestyle", style: true },
    { id: 2, text: "gold", style: true },
    { id: 3, text: "fashion", style: true },
    { id: 4, text: "industry", style: true },
    { id: 5, text: "design", style: false },
  ];

  return (
    <div id={id}>
      {postCategoriesArray.map(({ id, text, style }) => {
        return <Link key={id} to={`/blog/post/${tag}${text}`} className="post-categories-tag-text">{text}{(showComma && style) && ","} </Link>
      })}
    </div>
  );
};

export default PostCategories;