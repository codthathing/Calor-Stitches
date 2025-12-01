import AuthHeadText from "@/components/auth/AuthHeadText";
import UserButtons from "@/components/user/UserButtons";
import UserDetails from "@/components/user/UserDetails";
import UserImage from "@/components/user/UserImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile",
};

export default function UserProfilePage() {
  const user = { user_image: "/assets/user-profile.png", user_name: "John Doe", user_email: "johndoe@gmail.com" };

  return (
    <>
      <AuthHeadText headText={"Profile"} />
      <UserImage userImage={user.user_image} />
      <UserDetails userName={user.user_name} userEmail={user.user_email} />
      <UserButtons />
    </>
  );
}
