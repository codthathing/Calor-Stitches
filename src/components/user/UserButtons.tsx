import PageButtons from "../common/PageButtons";

export default function UserButtons() {
  return (
    <div id="user-buttons-div">
      <PageButtons type={"button"} buttonClass={"user-buttons"} buttonType={"black-button"} text={"upload profile"} />
      <PageButtons type={"button"} buttonClass={"user-buttons"} buttonType={"black-button"} text={"log out"} />
    </div>
  );
};
