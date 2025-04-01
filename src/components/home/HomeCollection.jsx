import { Link } from "react-router-dom";
import dress_collection from "../../assets/collection-images/collection-dresses.jpg";
import t_shirt_collection from "../../assets/collection-images/collection-t-shirt.jpg";
import outerwear_collection from "../../assets/collection-images/collection-outerwear.jpg";

const HomeCollection = () => {
  const collections = [
    { id: 0, collectionImage: dress_collection, collectionName: "dresses" },
    { id: 1, collectionImage: t_shirt_collection, collectionName: "t-shirts" },
    { id: 2, collectionImage: outerwear_collection, collectionName: "outerwear" }
  ]

  return (
    <section id="collectionSection">
      {collections.map(({ id, collectionImage, collectionName }) => {
        return (
          <div key={id} style={{ backgroundImage: `url(${collectionImage})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="mainCollection">
            <main className="collectionMain">
              <h1 className="collectionTopic">{collectionName}</h1>
              <Link to={`/product/collection/${collectionName}`} className="paragraphStyles collectionLink">VIEW COLLECTION</Link>
            </main>
          </div>
        );
      })}
    </section>
  );
}

export default HomeCollection;