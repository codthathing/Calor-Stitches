import HeaderCurrencyDiv from "../header/HeaderCurrencyDiv";
import HeaderSideMenu from "../header/HeaderSideMenu";
import HeaderContainer from "../header/HeaderContainer";

export default function Header() {
  return (
    <HeaderContainer>
      <div id="curLangHead">
        <p id="curLangOuterText">Delivery time 2-3 working days</p>
        <HeaderCurrencyDiv className={"display-currency-top"} />
      </div>
      <HeaderSideMenu />
    </HeaderContainer>
  );
}
