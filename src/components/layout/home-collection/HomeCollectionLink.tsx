"use client";
import { useNavigateToPage } from "@/hooks/useNavigateToPage";

export default function HomeCollectionLink({ collectionName }: { collectionName: string }) {
  const navigate = useNavigateToPage();

  return (
    <p onClick={() => navigate(`/product/collection/${collectionName}`)} className="paragraphStyles collectionLink">
      VIEW COLLECTION
    </p>
  );
}
