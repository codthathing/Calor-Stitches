import ContactTemplate from "./contact";
import SubscribeForm from "./subscribe_form";
import Handle from "./handle";

const NewsSection = () => {
  return (
    <section id="newsSection">
      <ContactTemplate />
      <div id="subscribeDiv">
        <h1 id="subscribeHead">Subscribe To Our Newsletter</h1>
        <SubscribeForm />
        <p id="subscribeParagraph">By subscribing, you accept the Privacy Policy</p>
        <Handle />
      </div>
    </section>
  );
};

export default NewsSection;