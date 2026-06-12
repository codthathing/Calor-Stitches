import { useRouter } from "next/navigation";

export default function CartProductName({ productName }: { productName: string }) {
  const router = useRouter();

  return (
    <p className="cartProductName" onClick={() => router.replace(`/review/${productName}`)}>
      {productName}
    </p>
  )
}