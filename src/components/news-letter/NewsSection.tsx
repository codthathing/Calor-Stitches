import NewsContactInfo from "./NewsContactInfo";
import NewsSubscribeForm from "./NewsSubscribeForm";
import NewsHandleIcons from "./NewsHandleIcons";

const NewsSection = () => {
  return (
    <section id="newsSection">
      <NewsContactInfo />
      <div id="subscribeDiv">
        <h1 id="subscribeHead">Subscribe To Our Newsletter</h1>
        <NewsSubscribeForm />
        <p id="subscribeParagraph">By subscribing, you accept the Privacy Policy</p>
        <NewsHandleIcons id={"newsAside"} />
      </div>
    </section>
  );
};

export default NewsSection;