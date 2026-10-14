import NavigationLink from "@/components/common/NavigationLink";

export default function CartProductName({ productName }: { productName: string }) {
  return (
    <NavigationLink className="cartProductName" href={`/review/${productName}`}>
      {productName}
    </NavigationLink>
  );
}
