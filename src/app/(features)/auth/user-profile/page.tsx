import AuthHeadText from "@/components/auth/AuthHeadText";
import UserProfileButtons from "@/components/user-profile/UserProfileButtons";
import UserProfileDetails from "@/components/user-profile/UserProfileDetails";
import UserProfileImage from "@/components/user-profile/UserProfileImage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Profile",
};

export default function UserProfilePage() {
  return (
    <>
      <AuthHeadText headText={"Profile"} />
      <UserProfileImage />
      <UserProfileDetails />
      <UserProfileButtons />
    </>
  );
}
