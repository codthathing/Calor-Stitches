import { useNavigate } from "react-router-dom";
import PageButtons from "../../common/PageButtons";

const ProductButton = ({ linkTo }) => {
  const navigate = useNavigate();

  return <PageButtons type={"button"} buttonType={"white-button"} buttonClass={"view-button"} buttonFunction={() => navigate(linkTo)} text={"view all"} />
};

export default ProductButton;