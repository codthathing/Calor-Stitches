import Payment from "./payment";
import LinkMainTemplate from "./linktest";
import CurLangTemplate from "../header/header_parts/currency/currencylang";

const Footer = () => {
  return (
    <footer id="footer">
      <section id="storeSection">
        <div>
          <article id="storeArticle">
            <h1 id="storeHead">About Our Store</h1>
            <p id="storeParagraph">Our values in Calor Stiches are upheld within high quality tailoring, fabric insight and innovative design alongside the desire for innovative and the natural beauty with versatility and top of mind allowing for the investment pieces.</p>
          </article>
          <Payment />
        </div>
        <LinkMainTemplate />
      </section>
      <section id="lastPage">
        <div id="curencyLangDiv">
          <p id="currencyLangInerText">United States (USD $)</p>
          <CurLangTemplate></CurLangTemplate>
        </div>
        <p id="copyText">©2024 Pheezy, All Rights Reserved. With Love by CalorStiches</p>
      </section>
    </footer>
  );
};

export default Footer;