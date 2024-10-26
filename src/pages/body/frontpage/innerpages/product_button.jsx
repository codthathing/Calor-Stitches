import { Link } from "react-router-dom";

const ProductButton = ({linkTo}) => {
  return (
    <button className="viewButton">
      <Link style={{ textDecoration: "none", color: "#222222" }} to={linkTo}>
        <p id="productButtonText" className="paragraphStyles">VIEW ALL</p>
      </Link>
    </button>
  );
};

export default ProductButton;