import FooterPaymentIconTemplate from "../footer/FooterPaymentIconTemplate";
import FooterLinkTemplate from "../footer/FooterLinkTemplate";
import HeaderCurrencyDiv from "../header/HeaderCurrencyDiv";

const Footer = () => {
  return (
    <footer id="footer">
      <section id="storeSection">
        <div>
          <article id="storeArticle">
            <h1 id="storeHead">About Our Store</h1>
            <p id="storeParagraph">Our values in Calor Stiches are upheld within high quality tailoring, fabric insight and innovative design alongside the desire for innovative and the natural beauty with versatility and top of mind allowing for the investment pieces.</p>
          </article>
          <FooterPaymentIconTemplate />
        </div>
        <FooterLinkTemplate />
      </section>
      <section id="lastPage">
        <div id="curencyLangDiv">
          <HeaderCurrencyDiv className={"display-currency-bottom"} />
        </div>
        <p id="copyText">©2024 Pheezy, All Rights Reserved. With Love by CalorStiches</p>
      </section>
    </footer>
  );
};

export default Footer;