export default function PageNavigationLinksLoading({ length }: { length: number }) {
  return (
      <section id="page-navigation-loading-section">
        {Array.from({ length }, (_, index) => (
          <main className="page-navigation-loading-main" key={index}>
            <div className="page-navigation-loading-text loading-background-animation" />
            {(index !== length - 1) && <div className="page-navigation-loading-arrow loading-background-animation" />}
          </main>
        ))}
      </section>
  )
}