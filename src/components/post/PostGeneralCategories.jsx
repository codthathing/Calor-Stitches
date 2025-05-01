import { useNavigateToPage } from "../../hooks/useNavigateToPage";

const PostGeneralCategories = ({ id, showComma, tag }) => {
  const navigate = useNavigateToPage();

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
        return <span key={id} onClick={() => navigate(`/blog/post/${tag}${text}`)} className="post-categories-tag-text">{text}{(showComma && style) && ","} </span>
      })}
    </div>
  );
};

export default PostGeneralCategories;