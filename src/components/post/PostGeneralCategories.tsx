import Link from "next/link";
import NavigationLink from "../common/NavigationLink";

export default function PostGeneralCategories({ id, showComma }: { id: string; showComma: boolean; }) {
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
        return <NavigationLink key={id} href={`/posts/${text}`} className="post-categories-tag-text">{text}{(showComma && style) && ","} </NavigationLink>
      })}
    </div>
  );
};
