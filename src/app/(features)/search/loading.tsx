import FeatureSearchWrapper from "@/components/layout/feature-search/FeatureSearchWrapper";
import { FaTimes } from "react-icons/fa";

export default function Loading() {
  return (
    <FeatureSearchWrapper CancelIcon={<FaTimes className="navBackIcon" id="search-loading-cancel-icon" />}>
      hello world
    </FeatureSearchWrapper>
  )
}