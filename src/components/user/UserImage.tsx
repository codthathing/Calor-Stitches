import Image from "next/image";

export default function UserImage({ userImage }: { userImage: string }) {
  return (
    <div id="user-profile-div">
      <Image src={userImage} loading="lazy" alt="profile_image" id="user-profile-img" />
    </div>
  );
};
