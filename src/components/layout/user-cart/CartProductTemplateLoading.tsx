export default function CartProductTemplateLoading({ length }: { length: number }) {
  return (
    <section id="cart-loading-item-section">
      {Array.from({ length }, (_, index) => (
        <main key={index} className="cart-loading-item-main">
          <section className="cart-loading-item-details-section">
            <div className="cart-loading-item-image loading-background-animation" />
            <div className="cart-loading-item-details loading-background-animation" />
          </section>
          <div className="cart-loading-item-cancel-icon loading-background-animation" />
        </main>
      ))}
    </section>
  )
}