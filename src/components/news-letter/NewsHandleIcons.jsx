import facebook from "../../assets/handle-icons/iconmonstr-facebook-4-240.png";
import instagram from "../../assets/handle-icons/iconmonstr-instagram-14-240.png";
import tiktok from "../../assets/handle-icons/iconmonstr-twitter-4-240.png";
import twitter from "../../assets/handle-icons/tiktok_round.png";

const NewsHandleIcons = ({ id, className }) => {
  const handleIcons = [
    { id: 0, handleIcon: facebook, handleAlt: "facebook_handle" },
    { id: 1, handleIcon: instagram, handleAlt: "instagram_handle" },
    { id: 2, handleIcon: tiktok, handleAlt: "tiktok_handle" },
    { id: 3, handleIcon: twitter, handleAlt: "twitter_handle" },
  ];
  return (
    <aside id={id} className={className}>
      {handleIcons.map(({ id, handleIcon, handleAlt }) => {
        return <img key={id} src={handleIcon} alt={handleAlt} className="newsHandle" />;
      })}
    </aside>
  );
};

export default NewsHandleIcons;
