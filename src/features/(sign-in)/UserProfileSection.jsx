import { useState } from "react";
import AuthCancelIcon from "../../components/auth/AuthCancelIcon";
import AuthHeadText from "../../components/auth/AuthHeadText";
import user_profile from "../../assets/user-profile.png";
import UserImage from "../../components/user/UserImage";
import UserDetails from "../../components/user/UserDetails";
import UserButtons from "../../components/user/UserButtons";

const UserProfileSection = () => {
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
};

export default UserProfileSection;
