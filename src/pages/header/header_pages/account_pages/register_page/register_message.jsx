const RegisterMessage = ({text, showText}) => {
  if(showText) {
    return <p id="register-message">{text}</p>
  }
};

export default RegisterMessage;