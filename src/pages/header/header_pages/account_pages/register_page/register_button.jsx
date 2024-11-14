import PageButtons from "../../../../components/page_buttons";

const RegisterButton = ({buttonFunction, buttonText}) => {
  return <PageButtons type={"submit"} buttonType={"black-button"} buttonClass={"navBtn registerBtn"} text={buttonText} buttonFunction={buttonFunction} />
};

export default RegisterButton;