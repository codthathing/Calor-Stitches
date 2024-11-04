import { Fragment } from "react";
import { Link } from "react-router-dom";

const ReviewProductDetails = ({productInfo}) => {
  return (
    <div className="productDeliveryDetails">
      {productInfo.map(({ id, name, type, links }) => {
        if (name === "SKU" || name === "CARTEGORIES") {
          return (
            <div key={id} className="productDeliveryDetailsTexts">
              <p>{name}:</p>
              {links.map(({ id, text, style = true }) => {
                return (
                  <Fragment key={id}>
                    {type === "link" ?
                      <Link to={`/product/collection/${text}`} style={{ textDecoration: "none" }} className="productDeliveryDetailsInnerText">{text}{style && ","}</Link> :
                      <span className="productDeliveryDetailsInnerText">{text}</span>}
                  </Fragment>
                )
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

export default ReviewProductDetails;