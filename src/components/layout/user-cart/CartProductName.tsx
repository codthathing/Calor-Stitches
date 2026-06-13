import Link from "next/link";

export default function CartProductName({ productName }: { productName: string }) {
  return (
    <Link className="cartProductName" style={{ textDecoration: "none" }} href={`/review/${productName}`}>
      {productName}
    </Link>
  );
}
