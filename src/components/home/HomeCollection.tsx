import Image from "next/image";
import HomeCollectionLink from "../layout/home-collection/HomeCollectionLink";

const HomeCollection = () => {
  const collections = [
    { id: 0, collectionImage: "/assets/collection-images/collection-dresses.jpg", collectionName: "dresses" },
    { id: 1, collectionImage: "/assets/collection-images/collection-t-shirts.jpg", collectionName: "t-shirts" },
    { id: 2, collectionImage: "/assets/collection-images/collection-outerwear.jpg", collectionName: "outerwears" }
  ]

  return (
    <section id="collectionSection">
      {collections.map(({ id, collectionImage, collectionName }) => {
        return (
          <div key={id} className="mainCollection">
            <Image src={collectionImage} loading="lazy" width={75} height={100} alt={`${collectionName.toUpperCase()} COLLECTION`} style={{ position: "absolute", objectFit: "cover", width: "100%", height: "100%", zIndex: "-1" }}/>
            <main className="collectionMain">
              <h1 className="collectionTopic">{collectionName}</h1>
              <HomeCollectionLink collectionName={collectionName} />
            </main>
          </div>
        );
      })}
    </section>
  );
}

export default HomeCollection;