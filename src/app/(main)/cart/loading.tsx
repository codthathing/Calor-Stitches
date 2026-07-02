import PageSection from "@/components/layout/PageSection";
import PageNavigationLinksLoading from "@/components/ui/PageNavigationLinksLoading";

export default function Loading() {
  return (
    <PageSection>
      <PageNavigationLinksLoading length={3} />
      <table id="wishlist-loading-table">
        <thead>
          <tr className="wishlist-loading-table-row">
            {Array.from({ length: 4 }, (_, index) => <th key={index} className="wishlist-loading-table-head"><div className="wishlist-loading-table-topic loading-background-animation" /></th> )}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 4 }, (_, index) => (
            <tr key={index} className="wishlist-loading-table-row">
              <td className="wishlist-loading-table-data wishlist-loading-table-data-details">
                <div className="wishlist-loading-table-item-cancel-icon loading-background-animation" />
                <div className="wishlist-loading-table-item-image loading-background-animation" />
                <div className="cart-loading-table-item-details loading-background-animation" />
              </td>
              <td className="wishlist-loading-table-data cart-loading-table-data-other-details">
                <div className="cart-loading-table-item-price-text loading-background-animation" />
                <div className="cart-loading-table-item-price loading-background-animation" />
              </td>
              <td className="wishlist-loading-table-data cart-loading-table-data-other-details">
                <div className="cart-loading-table-item-quantity-text loading-background-animation" />
                <div className="cart-loading-table-item-quantity loading-background-animation" />
              </td>
              <td className="wishlist-loading-table-data cart-loading-table-data-other-details">
                <div className="cart-loading-table-item-total-price-text loading-background-animation" />
                <div className="cart-loading-table-item-total-price loading-background-animation" />
              </td>
            </tr>           
          ))}
        </tbody>
      </table>
      <div id="cart-loading-update-button" className="loading-background-animation" />
      <section>
        <div id="cart-loading-address-topic" className="loading-background-animation" />
        <section id="cart-loading-address-section">
          {Array.from({ length: 2 }, (_, index) => (
            <main key={index} className="cart-loading-address-details">
              <div className="cart-loading-address-details-text loading-background-animation" />
              <div className="cart-loading-address-details-value loading-background-animation" />
            </main>
          ))}
        </section>
        <div id="cart-loading-checkout-button" className="loading-background-animation" />
      </section>
    </PageSection>
  )
}