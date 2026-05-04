"use client";
import { useNavigateContext } from "@/store/providers/NavigateProvider";

export default function UserProfileDetails() {
    const { userDetails } = useNavigateContext();

  return (
    <div id="user-details-div">
      <p className="user-details-text">Username: <span className="user-details-span">{userDetails.userName}</span></p>
      <p className="user-details-text">Email: <span className="user-details-span">{userDetails.userEmail}</span></p>
    </div>
  );
};
