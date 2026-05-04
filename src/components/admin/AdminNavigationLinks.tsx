import Link from "next/link";

export default function AdminNavigationLinks({ array }: { array: { id: number; text: string; path: string }[] }) {
  return (
    <main id="productAboutMain">
      {array.map(({ id, text, path }) => {
        return <Link key={id} href={path} className="productAboutMainTexts">{text}</Link>
      })}
    </main>
  );
};
