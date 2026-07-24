import CartProductTemplateLoading from "@/components/layout/user-cart/CartProductTemplateLoading";

export default function Loading() {
  return (
    <main id="cart-loading-section" className="cart-section whiteBackSections">
      <header id="cart-loading-header">
        <div id="cart-loading-topic" className="loading-background-animation" />
        <div id="cart-loading-cancel-icon" className="loading-background-animation" />
      </header>
      <CartProductTemplateLoading length={2} />
      <footer id="cart-loading-footer">
        <section id="cart-loading-amount-section">{Array.from({ length: 2 }, (_, index) => <div key={index} className="cart-loading-amount loading-background-animation" />)}</section>
        <section id="cart-loading-button-section">{Array.from({ length: 2 }, (_, index) => <div key={index} className="cart-loading-button loading-background-animation" />)}</section>
      </footer>
    </main>
  )
}