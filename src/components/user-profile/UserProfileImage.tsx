"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";
import Image from "next/image";

export default function UserProfileImage() {
  const { userDetails } = useNavigateContext();

  return (
    <div id="user-profile-div">
      <Image src={userDetails.userImage} width={100} height={100} loading="lazy" alt="profile_image" id="user-profile-img" />
    </div>
  );
};
