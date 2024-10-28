const CartInfo = ({ showInfoText, infoTextArray }) => {
  if (showInfoText) {
    return (
      <div className="cart-info-div">
        {infoTextArray.map((text) => {
          return <p key={text} className="cart-info-text">{text}</p>
        })}
      </div>
    );
  };
};

export default CartInfo;