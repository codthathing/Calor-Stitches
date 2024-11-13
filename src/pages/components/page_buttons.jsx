const PageButtons = ({ type, buttonType, buttonClass, text, pageFunction }) => {
  return (
    <>
      {(type === "button" || type === "submit") && <button onClick={pageFunction} type={type} className={`${buttonClass} ${buttonType === "black-button" ? "page-black-button" : "page-white-button"} page-button`}>
        <span className={`${buttonType === "black-button" ? "button-black-text" : "button-white-text" } page-button-text`}>{text}</span>
      </button>}
      {type === "text" && <span onClick={pageFunction} className={`page-animate-text button-white-text page-button-text`}>{text}</span>}
    </>
  );
};

export default PageButtons;