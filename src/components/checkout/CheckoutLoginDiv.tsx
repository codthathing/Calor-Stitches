import Link from "next/link";

export default function CheckoutLoginDiv() {
  return (
    <div id="checkoutLoginDiv">
      <p className="checkoutLoginTexts">Returning customer?</p>
      <Link className="checkoutLoginTexts" href={"/auth/login"}>Click here to login</Link>
    </div>
  );
};
