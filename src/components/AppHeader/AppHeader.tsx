import logoImage from "../../assets/Frame564777071.png";

import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import { SearchInput } from "../SearchInput/SearchInput";
import { Notifications } from "../../assets/svg-images/Notifications";
import { UserMenu } from "../UserMenu/UserMenu";
import "./AppHeader.scss";

export const AppHeader = () => {
  return (
    <header className="content-header">
      <img src={logoImage} alt="Innowise logo" />

      <div className="header-toolbar">
        <SearchInput placeholder="Search" />
        <LanguageSelect />

        <button className="notifications">
          <Notifications />
        </button>

        <UserMenu />
      </div>
    </header>
  );
};
