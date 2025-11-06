const UserImage = ({userImage}) => {
  return (
    <div id="user-profile-div">
      <img src={userImage} loading="lazy" alt="profile_image" id="user-profile-img" />
    </div>
  );
};

export default UserImage;