import PostHomeTemplate from "./PostHomeTemplate";

export default function PostSection() {
  return (
    <section id="postSection">
      <div id="postHeadDiv">
        <p className="product-section-para paragraphStyles">FROM THE BLOGS</p>
        <p className="product-section-head">Check Out Our Latest Posts</p>
      </div>
      <PostHomeTemplate />
    </section>
  );
};
