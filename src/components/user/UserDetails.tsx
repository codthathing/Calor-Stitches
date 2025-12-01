export default function UserDetails({ userName, userEmail }: { userName: string; userEmail: string }) {
  return (
    <div id="user-details-div">
      <p className="user-details-text">Username: <span className="user-details-span">{userName}</span></p>
      <p className="user-details-text">Email: <span className="user-details-span">{userEmail}</span></p>
    </div>
  );
};
