import { useAppSelector } from "../../app/hooks";
import userAvatar from "../../assets/UserAvatar.png";
import { ArrowDown } from "../../assets/svg-images/ArrowDown";
import "./UserMenu.scss";

export const UserMenu = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <button className="user-data">
      <img src={userAvatar} alt={user?.name ?? "User"} />
      <span className="user-data-details">
        <p className="user-name">{user?.name}</p>
        <p className="user-role">{user?.role}</p>
      </span>
      <ArrowDown />
    </button>
  );
};
