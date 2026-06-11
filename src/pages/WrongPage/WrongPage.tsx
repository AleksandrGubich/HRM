import { Link } from "react-router";
import WrongPageImage from "../../assets/WrongPage.png";
import "./WrongPage.scss";

export const WrongPage = () => {
  return (
    <div className="wrong-page-inner">
      <img src={WrongPageImage} alt="Wrong Page Error" />
      <Link to="/login" className="exit-btn">
        But i know, where you can find exit
      </Link>
    </div>
  );
};
