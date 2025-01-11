import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import PageButtons from "../common/PageButtons";

const ReviewProductDetails = ({productInfo}) => {
  const navigate = useNavigate();

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
                      <PageButtons type={"text"} textClass={""} buttonFunction={() => navigate(`/product/collection/${text}`)} text={style ? `${text},` : `${text}`} /> :
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