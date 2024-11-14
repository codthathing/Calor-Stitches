import { useContext } from "react";
import { ToggleRegister } from "../../../../contextpage";
import PageButtons from "../../../../components/page_buttons";

const RegisterNav = ({ nextRegister, navText }) => {
  const { setPresentRegister } = useContext(ToggleRegister);

  return (
    <div className="register-nav-div">
      <PageButtons type={"text"} buttonFunction={() => setPresentRegister(nextRegister)} text={navText} />
    </div>
  );
};

export default RegisterNav;