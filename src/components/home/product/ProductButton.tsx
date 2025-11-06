import PageButtons from "../../common/PageButtons";
import { useNavigateToPage } from "../../../hooks/useNavigateToPage";

const ProductButton = ({ linkTo }) => {
  const navigate = useNavigateToPage();

  return <PageButtons type={"button"} buttonType={"white-button"} buttonClass={"view-button"} buttonFunction={() => navigate(linkTo)} text={"view all"} />
};

export default ProductButton;