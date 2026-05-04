import Image from "next/image";
import Link from "next/link";

export default function HomeCollection() {
  const collections = [
    { id: 0, image: "/assets/collection-images/collection-dresses.jpg", category: "dresses" },
    { id: 1, image: "/assets/collection-images/collection-t-shirts.jpg", category: "t-shirts" },
    { id: 2, image: "/assets/collection-images/collection-outerwear.jpg", category: "outerwears" }
  ]

  return (
    <section id="collectionSection">
      {collections.map(({ id, image, category }) => {
        return (
          <div key={id} className="mainCollection">
            <Image src={image} loading="lazy" width={75} height={100} alt={`${category.toUpperCase()} COLLECTION`} style={{ position: "absolute", objectFit: "cover", width: "100%", height: "100%", zIndex: "-1" }}/>
            <main className="collectionMain">
              <h1 className="collectionTopic">{category}</h1>
              <Link href={`/collection/${category}`} className="paragraphStyles collectionLink">VIEW COLLECTION</Link>
            </main>
          </div>
        );
      })}
    </section>
  );
}
