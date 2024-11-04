import facebook from "../../asset/images-icons/handleIcons/iconmonstr-facebook-4-240.png";
import instagram from "../../asset/images-icons/handleIcons/iconmonstr-instagram-14-240.png";
import tiktok from "../../asset/images-icons/handleIcons/iconmonstr-twitter-4-240.png";
import twitter from "../../asset/images-icons/handleIcons/tiktok_round.png";

const Handle = ({id}) => {
  const handleIcons = [
    {id: 0, handleIcon: facebook, handleAlt: "facebook_handle"},
    {id: 1, handleIcon: instagram, handleAlt: "instagram_handle"},
    {id: 2, handleIcon: tiktok, handleAlt: "tiktok_handle"},
    {id: 3, handleIcon: twitter, handleAlt: "twitter_handle"},
  ]
  return (
    <aside id={id}>
      {handleIcons.map(({id, handleIcon, handleAlt}) => {
        return <img key={id} src={handleIcon} alt={handleAlt} className="newsHandle" />
      })}
    </aside>
  );
}

export default Handle;