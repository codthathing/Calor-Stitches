import { useState } from "react";
import AuthCancelIcon from "../../auth/AuthCancelIcon";
import AuthHeadText from "../../auth/AuthHeadText";
import user_profile from "../../assets/user-profile.png";
import UserImage from "../../user/UserImage";
import UserDetails from "../../user/UserDetails";
import UserButtons from "../../user/UserButtons";

export default function UserProfilePage() {
  const [user, setUser] = useState({ user_image: user_profile, user_name: "John Doe", user_email: "johndoe@gmail.com" });

  return (
    <>
      <AuthCancelIcon />
      <div className="registerDiv">
        <AuthHeadText headText={"Profile"} />
        <UserImage userImage={user.user_image} />
        <UserDetails userName={user.user_name} userEmail={user.user_email} />
        <UserButtons />
      </div>
    </>
  );
}
