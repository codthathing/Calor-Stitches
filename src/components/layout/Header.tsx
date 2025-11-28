import HeaderCurrencyDiv from "../header/HeaderCurrencyDiv";
import HeaderSideMenu from "../header/HeaderSideMenu";
import HeaderWrapper from "../header/HeaderWrapper";

export default function Header() {
  return (
    <HeaderWrapper>
      <div id="curLangHead">
        <p id="curLangOuterText">Delivery time 2-3 working days</p>
        <HeaderCurrencyDiv className={"display-currency-top"} />
      </div>
      <HeaderSideMenu />
    </HeaderWrapper>
  );
}
