import { useContext, useState } from "react";
import { ToggleRegister } from "../../../../contextpage";

const LatestLinks = () => {
  const { hotItems, newArrivals, onSales, setLatestItems } = useContext(ToggleRegister);

  const latestObject = [
    { id: 0, latestText: "HOT ITEMS", latestArray: hotItems, borderBool: true, borderStyle: "1px solid black" },
    { id: 1, latestText: "NEW ARRIVALS", latestArray: newArrivals, borderBool: false, borderStyle: "1px solid black" },
    { id: 2, latestText: "ON SALE", textColor: "#FF421D", latestArray: onSales, borderBool: false, borderStyle: "1px solid #FF421D" }
  ];

  const [changeLatestObject, setChangeLatestObject] = useState(latestObject);

  const ChangeLatestItem = (newitem, latestText) => {
    setLatestItems(newitem);
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
      {changeLatestObject.map(({ id, latestText, textColor, latestArray, borderBool, borderStyle }) => {
        return <li key={id} className="latestItem" style={{ borderBottom: borderBool ? borderStyle : "", color: textColor ? textColor : "#222222" }} onMouseEnter={() => ChangeLatestItem(latestArray, latestText)}>{latestText}</li>
      })}
    </ul>
  );
}

export default LatestLinks;