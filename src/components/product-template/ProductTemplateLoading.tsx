export default function ProductTemplateLoading({ length }: { length: number }) {
  return (
    <>
      <section id="product-loading-section">
        {Array.from({ length }, (_, index) => (
          <main key={index} className="product-loading-main">
            <div className="product-loading-image loading-background-animation" />
            <div className="product-loading-name loading-background-animation" />
            <div className="product-loading-price loading-background-animation" />
          </main>
        ))}
      </section>
      <section id="product-loading-navigation-section">
        <div id="product-loading-navigation" className="loading-background-animation"/>
        <div id="product-loading-navigation" className="loading-background-animation"/>
        <div id="product-loading-navigation" className="loading-background-animation"/>
        <div id="product-loading-navigation" className="loading-background-animation"/>
      </section>
    </>
  );
}
