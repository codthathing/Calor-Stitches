import PageButtons from "../common/PageButtons";

const AuthButton = ({ buttonFunction, buttonText }) => {
  return <PageButtons type={"submit"} buttonType={"black-button"} buttonClass={"navBtn registerBtn"} text={buttonText} buttonFunction={buttonFunction} />;
};

export default AuthButton;
