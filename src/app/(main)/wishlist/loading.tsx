import PageSection from "@/components/layout/PageSection";
import PageNavigationLinksLoading from "@/components/ui/PageNavigationLinksLoading";

export default function Loading() {
  return (
    <PageSection>
      <PageNavigationLinksLoading length={2} />
      <table id="wishlist-loading-table">
        <thead>
          <tr className="wishlist-loading-table-row">
            {Array.from({ length: 4 }, (_, index) => <th key={index} className="wishlist-loading-table-head"><div {...(index === 3 && { style: { visibility: "hidden" } })} className="wishlist-loading-table-topic loading-background-animation" /></th> )}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 4 }, (_, index) => (
            <tr key={index} className="wishlist-loading-table-row">
              <td className="wishlist-loading-table-data wishlist-loading-table-data-details">
                <div className="wishlist-loading-table-item-cancel-icon loading-background-animation" />
                <div className="wishlist-loading-table-item-image loading-background-animation" />
                <div className="wishlist-loading-table-item-details loading-background-animation" />
              </td>
              <td className="wishlist-loading-table-data"><div className="wishlist-loading-table-item-price loading-background-animation" /></td>
              <td className="wishlist-loading-table-data"><div className="wishlist-loading-table-item-status loading-background-animation" /></td>
              <td className="wishlist-loading-table-data"><div className="wishlist-loading-table-item-button loading-background-animation" /></td>
            </tr>           
          ))}
        </tbody>
      </table>
      <section id="wishlist-loading-handle-section">
        {Array.from({ length: 2 }, (_, index) => (
          <main key={index} className="wishlist-loading-handle-main">
            <div className="loading-background-animation wishlist-loading-handle-icon" />
            <div className="wishlist-loading-handle-text loading-background-animation" />
          </main>
        ))}
      </section>
    </PageSection>
  )
}