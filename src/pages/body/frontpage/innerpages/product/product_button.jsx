import { Link } from "react-router-dom";

const ProductButton = ({ linkTo }) => {
  return (

    <Link style={{ textDecoration: "none", color: "#222222" }} to={linkTo}>
      <button className="viewButton">
        <p className="paragraphStyles">VIEW ALL</p>
      </button>
    </Link>
  );
};

export default ProductButton;