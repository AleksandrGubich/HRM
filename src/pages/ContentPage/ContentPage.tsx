import "./ContentPage.scss";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { CorporateInfo } from "../../components/CorporateInfo/CorporateInfo";

export const ContentPage = () => {
  return (
    <main className="content-page">
      <AppHeader />

      <div className="main-content">
        <Sidebar />
        <CorporateInfo />
      </div>
    </main>
  );
};
