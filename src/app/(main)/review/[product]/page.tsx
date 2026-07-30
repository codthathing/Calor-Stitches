import AboutSection from "@/components/review/AboutSection";
import ReviewNavigationLinks from "@/components/review/ReviewNavigationLinks";
import ReviewPictureDiv from "@/components/review/ReviewPictureDiv";
import ReviewRelatedProducts from "@/components/review/ReviewRelatedProducts";
import ReviewSection from "@/components/review/ReviewSection";
import ReviewSectionWrapper from "@/components/review/ReviewSectionWrapper";
import ReviewProvider from "@/store/providers/ReviewProvider";

export const dynamic = 'force-dynamic';

export const generateMetadata = async ({ params }: { params: Promise<{ product: string }> }) => {
  const { product } = await params;
  const title = decodeURIComponent(product).split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");

  return { title };
};

export default async function ReviewPage({ params } : { params: Promise<{ product: string }> }) {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const { product } = await params;

  return (
    <ReviewProvider productName={decodeURIComponent(product)}>
      <ReviewSectionWrapper>
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
      </ReviewSectionWrapper>
    </ReviewProvider>
  );
}
