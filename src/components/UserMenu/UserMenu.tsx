import userAvatar from "../../assets/UserAvatar.png";
import { ArrowDown } from "../../assets/svg-images/ArrowDown";
import "./UserMenu.scss";

export const UserMenu = () => {
  return (
    <button className="user-data">
      <img src={userAvatar} alt="Darrel Steward" />
      <span className="user-data-details">
        <p className="user-name">Darrell Steward</p>
        <p className="user-role">QA Engineer</p>
      </span>
      <ArrowDown />
    </button>
  );
};
