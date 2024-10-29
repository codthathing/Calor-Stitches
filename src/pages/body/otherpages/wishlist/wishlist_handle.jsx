import facebook from "../../../../asset/images-icons/handleIcons/iconmonstr-facebook-4-240.png";
import twitter from "../../../../asset/images-icons/handleIcons/iconmonstr-twitter-4-240.png";

const WishlistHandle = () => {
  const wishlistHandles = [
    { id: 0, handleIcon: facebook, handleText: "SHARE" },
    { id: 1, handleIcon: twitter, handleText: "TWEET" }
  ];

  return (
    <div id="wishlistHandleShare">
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