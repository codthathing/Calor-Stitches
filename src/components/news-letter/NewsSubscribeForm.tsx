import PageButtons from "../common/PageButtons";

const NewsSubscribeForm = () => {
  return (
    <form id="subscribeForm">
      <input type="text" id="subscribeInput" title="Please fill out this field" placeholder="Your Email Address" />
      <PageButtons type={"button"} buttonType={"black-button"} buttonClass={"subscribe-button"} text={"subscribe"} />
    </form>
  );
};

export default NewsSubscribeForm;