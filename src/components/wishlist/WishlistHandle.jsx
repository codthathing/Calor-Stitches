import facebook from "../../assets/handle-icons/iconmonstr-facebook-4-240.png";
import twitter from "../../assets/handle-icons/iconmonstr-twitter-4-240.png";

const WishlistHandle = ({className}) => {
  const wishlistHandles = [
    { id: 0, handleIcon: facebook, handleText: "SHARE" },
    { id: 1, handleIcon: twitter, handleText: "TWEET" }
  ];

  return (
    <div id="wishlistHandleShare" className={className}>
      {wishlistHandles.map(({ id, handleIcon, handleText }) => {
        return (
          <div key={id} className="wishlistHandleDiv">
            <img src={handleIcon} alt="" className="wislistHandleShareImg" />
            <p className="wishlistHandleText">{handleText}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WishlistHandle;