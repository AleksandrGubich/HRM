import { useNavigate } from "react-router";
import { useAppDispatch } from "../../app/hooks";
import { GoogleIcon } from "../../assets/svg-images/GoogleIcon";
import "./AuthButton.scss";
import { login } from "../../features/auth/authSlice";

export const AuthButton = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(
      login({
        name: "Darrell Steward",
        role: "QA Engineer",
      }),
    );

    navigate("/content");
  };

  return (
    <button className="google-button" type="button" onClick={loginHandler}>
      <GoogleIcon />
      <p>Continue with Google</p>
    </button>
  );
};
