const PageInfo = ({ border, showInfo, infoTextArray }) => {

  if (showInfo) {
    return (
      <div className="cart-info-div" style={{border: `1px solid ${border}`}}>
        {infoTextArray.map((text) => {
          return <p key={text} className="cart-info-text">{text}</p>
        })}
      </div>
    );
  };
};

export default PageInfo;