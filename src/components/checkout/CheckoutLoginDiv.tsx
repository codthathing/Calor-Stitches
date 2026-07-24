import PageModalLink from "../layout/PageModalLinks";

export default function CheckoutLoginDiv() {
  return (
    <div id="checkoutLoginDiv">
      <p className="checkoutLoginTexts">Returning customer?</p>
      <PageModalLink className="checkoutLoginTexts" prefetch={false} href={"/auth/login"}>Click here to login</PageModalLink>
    </div>
  );
};
