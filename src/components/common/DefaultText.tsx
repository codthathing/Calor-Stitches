const DefaultText = ({ textStyle, text }) => {
  return <p style={{ textAlign: textStyle }} className="defaultText">{text}</p>
};

export default DefaultText;