const UserDetails = ({ userName, userEmail }) => {
  return (
    <div id="user-details-div">
      <p className="user-details-text">Username: <span className="user-details-span">{userName}</span></p>
      <p className="user-details-text">Email: <span className="user-details-span">{userEmail}</span></p>
    </div>
  );
};

export default UserDetails;