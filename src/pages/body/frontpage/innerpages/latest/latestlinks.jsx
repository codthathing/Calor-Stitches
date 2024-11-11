import { useContext, useState } from "react";
import { LatetProductContext } from "./latest_section";

const LatestLinks = () => {
  const {setMapProducts} = useContext(LatetProductContext)

  const latestObject = [
    { id: 0, latestText: "HOT ITEMS", borderBool: true, borderStyle: "1px solid black" },
    { id: 1, latestText: "NEW ARRIVALS", borderBool: false, borderStyle: "1px solid black" },
    { id: 2, latestText: "ON SALE", textColor: "#FF421D", borderBool: false, borderStyle: "1px solid #FF421D" }
  ];

  const [changeLatestObject, setChangeLatestObject] = useState(latestObject);

  const ChangeLatestItem = (id, latestText) => {
    setMapProducts((id * 4) + 4);
    const updatedLatestObject = latestObject.map((link) => {
      if (link.latestText === latestText) {
        return { ...link, borderBool: true };
      } else {
        return { ...link, borderBool: false };
      }
    })
    setChangeLatestObject(updatedLatestObject);
  };

  return (
    <ul id="navLatest">
      {changeLatestObject.map(({ id, latestText, textColor, borderBool, borderStyle }) => {
        return <li key={id} className="latestItem" style={{ borderBottom: borderBool ? borderStyle : "", color: textColor ? textColor : "#222222" }} onMouseEnter={() => ChangeLatestItem(id, latestText)}>{latestText}</li>
      })}
    </ul>
  );
}

export default LatestLinks;