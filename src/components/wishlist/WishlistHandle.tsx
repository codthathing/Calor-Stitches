import { FaFacebook, FaTwitter } from "react-icons/fa";

const WishlistHandle = ({className}) => {
  const wishlistHandles = [
    { id: 0, HandleIcon: FaFacebook , handleText: "SHARE" },
    { id: 1, HandleIcon: FaTwitter, handleText: "TWEET" }
  ];

  return (
    <div id="wishlistHandleShare" className={className}>
      {wishlistHandles.map(({ id, HandleIcon, handleText }) => {
        return (
          <div key={id} className="wishlistHandleDiv">
            <HandleIcon className="wislistHandleShareImg" />
            <p className="wishlistHandleText">{handleText}</p>
          </div>
        );
      })}
    </div>
  );
};

export default WishlistHandle;