import { ArrowDown } from "../../assets/svg-images/ArrowDown";
import "./LanguageSelect.scss";

export const LanguageSelect = () => {
  return (
    <button className="dropdown" type="button">
      <p>EN</p>
      <ArrowDown />
    </button>
  );
};
