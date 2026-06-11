import { GoogleIcon } from "../../assets/svg-images/GoogleIcon";
import "./AuthButton.scss";

export const AuthButton = () => {
  return (
    <button className="google-button" type="button">
      <GoogleIcon />
      <p>Continue with Google</p>
    </button>
  );
};
