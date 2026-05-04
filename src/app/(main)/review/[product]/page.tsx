import PageSection from "@/components/layout/PageSection";
import AboutSection from "@/components/review/AboutSection";
import ReviewNavigationLinks from "@/components/review/ReviewNavigationLinks";
import ReviewPictureDiv from "@/components/review/ReviewPictureDiv";
import ReviewRelatedProducts from "@/components/review/ReviewRelatedProducts";
import ReviewSection from "@/components/review/ReviewSection";
import ReviewProvider from "@/store/providers/ReviewProvider";

export default async function ReviewPage({ params } : { params: Promise<{ product: string }> }) {
  const { product } = await params;

  return (
    <ReviewProvider productName={decodeURIComponent(product)}>
      <PageSection id="productReview">
        <ReviewNavigationLinks />
        <main id="productReviewMain" className="productMains">
          <ReviewPictureDiv />
          <ReviewSection />
        </main>
        <AboutSection />
        <div id="productRelatedDiv">
          <p id="productRelatedText">Related products</p>
          <ReviewRelatedProducts />
        </div>
      </PageSection>
    </ReviewProvider>
  );
}
