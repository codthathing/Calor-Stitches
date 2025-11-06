const FormFeedback = ({text, showText}) => {
  if(showText) {
    return <p id="register-message">{text}</p>
  }
};

export default FormFeedback;