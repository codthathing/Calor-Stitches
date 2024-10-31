import { useEffect, useState } from "react";

const ProductAvail = ({ productAvailable, wishlistStock, cutOff }) => {
  const [productAvail, setProductAvail] = useState({});
  const [doubleAvail, setDoubleAvail] = useState({});
  useEffect(() => {
    if (wishlistStock === 0 && productAvailable) {
      setProductAvail({ color: "#C2272D", text: "SOLD OUT" });
    } else if(productAvailable) {
      const productUpperCase = productAvailable.toUpperCase() || "";
      switch (productUpperCase) {
        case "NEW IN":
          setProductAvail({ color: "#00A849", text: "NEW IN" });
          break;
        case "BACK IN STORE":
          setProductAvail({ color: "#AECA2E", text: "BACK IN STORE" });
          break;
        case "HOT":
          setProductAvail({ color: "#FF421D", text: "HOT" });
          break;
        default:
          setProductAvail({ color: "#000000", text: "AVAILABLE" });
      }
    };

    if(cutOff) {
      setDoubleAvail({color: "#FF0000", text: `${cutOff}% OFF`});
    };
  }, []);

  return (
    <div className="availDiv">
      {productAvailable && <span className="productAvail paragraphStyles" style={{ backgroundColor: productAvail.color }}>{productAvail.text}</span>}
      {cutOff && <span className="productAvail paragraphStyles" style={{ backgroundColor: doubleAvail.color }}>{doubleAvail.text}</span>}
    </div>
  );
};

export default ProductAvail;