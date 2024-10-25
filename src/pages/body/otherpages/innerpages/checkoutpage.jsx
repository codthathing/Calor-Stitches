import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToggleRegister } from "../../../contextpage";
import PageLinkTemplate from "../pagelinks";

const CheckoutPage = () => {

  const { setNavbar, setCart, setToggleSideMenu } = useContext(ToggleRegister);
  const [showOptAddress, setShowOptAddress] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCart(false);
    setToggleSideMenu(false);
    setNavbar(true);
  }, [])

  const pageLinkDetails = [
    { id: 0, linkDirect: "/", linkText: "Home", linkArrow: true },
    { id: 1, linkDirect: "", linkText: "shop", linkArrow: true },
    { id: 2, linkDirect: "", linkText: "checkout", linkArrow: false }
  ]

  return (
    <div className="otherPages" id="productReview">
      <PageLinkTemplate pageLinks={pageLinkDetails} />
      <main id="checkoutMain">
        <div id="checkoutLoginDiv">
          <p className="checkoutLoginTexts">Returning customer?</p>
          <p className="checkoutLoginTexts">Click here to login</p>
        </div>
        <section id="billOrderSection">
          <div className="billOrderDiv" id="billDiv">
            <p className="billOrderText" id="billText">Billings</p>
            <form className="billForm">
              <div className="billLabelInputDiv">
                <label className="billLabel">First name *</label>
                <input type="text" id="" name="" defaultValue={""} required className="billInput" />
              </div>
              <div className="billLabelInputDiv">
                <label className="billLabel">Last name *</label>
                <input type="text" id="" name="" defaultValue={""} required className="billInput" />
              </div>
              <div className="billLabelInputDiv">
                <label className="billLabel">Country/Region *</label>
                <input type="text" id="" name="" defaultValue={"Nigeria"} readOnly className="billInput" />
              </div>
              <div className="billLabelInputDiv">
                <label className="billLabel">Street address *</label>
                <input type="text" id="" name="" defaultValue={"House number and street address"} required className="billInput" />
              </div>
              <div className="billLabelInputDiv">
                <input type="text" id="" name="" defaultValue={"Apartment, suite, unit, etc. (optional)"} className="billInput" />
              </div>
              <div className="billLabelInputDiv">
                <label className="billLabel">Town/City *</label>
                <input type="text" id="" name="" defaultValue={""} required className="billInput" />
              </div>
              <div className="billLabelInputDiv">
                <label className="billLabel">Phone *</label>
                <input type="tel" id="" name="" defaultValue={""} required className="billInput" />
              </div>
              <div className="billLabelInputDiv">
                <label className="billLabel">Email *</label>
                <input type="email" id="" name="" defaultValue={""} required className="billInput" />
              </div>
            </form>
            <div id="billOtherAddresssDiv">
              <main id="billOtherMain">
                <input type="checkbox" name="" onClick={() => setShowOptAddress(!showOptAddress)} id="billOtherCheckbox" />
                <p id="billOtherText">Ship to a different address?</p>
              </main>
              {showOptAddress && <form className="billForm">
                <div className="billLabelInputDiv">
                  <label className="billLabel">First name *</label>
                  <input type="text" id="" name="" defaultValue={""} required className="billInput" />
                </div>
                <div className="billLabelInputDiv">
                  <label className="billLabel">Last name *</label>
                  <input type="text" id="" name="" defaultValue={""} required className="billInput" />
                </div>
                <div className="billLabelInputDiv">
                  <label className="billLabel">Country/Region *</label>
                  <input type="text" id="" name="" defaultValue={"Nigeria"} readOnly className="billInput" />
                </div>
                <div className="billLabelInputDiv">
                  <label className="billLabel">Street address *</label>
                  <input type="text" id="" name="" defaultValue={"House number and street address"} required className="billInput" />
                </div>
                <div className="billLabelInputDiv">
                  <input type="text" id="" name="" defaultValue={"Apartment, suite, unit, etc. (optional)"} className="billInput" />
                </div>
                <div className="billLabelInputDiv">
                  <label className="billLabel">Town/City *</label>
                  <input type="text" id="" name="" defaultValue={""} required className="billInput" />
                </div>
              </form>}
            </div>
            <div id="billOptTextDiv">
              <label htmlFor="" id="billOptText">Order notes (optional)</label>
              <textarea name="" id="billOptTextArea" defaultValue={"Notes about your order"}></textarea>
            </div>
          </div>
          <div className="billOrderDiv" id="orderDiv">
            <p className="billOrderText" id="orderText">Your order</p>
            <div id="oderInnerDiv">
              <div id="orderOptionDiv">
                <p className="orderOptionText">Product</p>
                <p className="orderOptionText">Subtotal</p>
              </div>
              <main id="orderProductMain">
                <div className="orderProductPriceDiv">
                  <p className="orderProductNameAmt">Butter Cream Dress * {2}</p>
                  <p className="orderPriceValue">$100</p>
                </div>
                <div className="orderProductPriceDiv">
                  <p className="orderProductNameAmt">Butter Cream Dress * {2}</p>
                  <p className="orderPriceValue">$100</p>
                </div>
              </main>
            </div>
            <div className="orderSubTotalDiv">
              <p className="orderSubTotalText">Subtotal</p>
              <p className="orderSubTotalValue">$400</p>
            </div>
            <div className="orderSubTotalDiv">
              <p className="orderSubTotalText">Shipping fee</p>
              <p className="orderSubTotalValue">$200</p>
            </div>
            <div className="orderSubTotalDiv">
              <p className="orderSubTotalText">Total</p>
              <p className="orderSubTotalValue">$600</p>
            </div>
            <div id="orderPaymentDiv">
              <div className="paymentMethodDiv">
                <div className="paymentButtonText">
                  <input type="radio" className="paymentButton" />
                  <p className="paymentText">Direct bank transfer</p>
                </div>
                <p className="paymentMethodDetails">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              </div>
            </div>
            <p id="personalInfoText">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
            <div id="termsDiv">
              <input type="checkbox" id="termsCheckbox" />
              <p id="termsText">I have read and agree to the website terms and conditions *</p>
            </div>
            <Link to="/pages/payment_page">
              <button id="placeOrderBtn">PLACE ORDER</button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CheckoutPage;