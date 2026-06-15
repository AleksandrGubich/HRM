import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  CorporateTab,
  setActiveCopropateTab,
} from "../../features/nav/navSlice";
import "./CorporateNav.scss";

const corporateTabs: CorporateTab[] = ["Courses", "Lectures", "Quizzes"];

export const CorporateNav = () => {
  const dispatch = useAppDispatch();
  const activeCorporateTab = useAppSelector(
    (state) => state.nav.activeCorporateTab,
  );

  return (
    <div className="corporate-info-nav">
      {corporateTabs.map((tab) => (
        <button
          key={tab}
          className={`info-btn ${tab === activeCorporateTab ? "active-nav" : ""}`}
          type="button"
          onClick={() => dispatch(setActiveCopropateTab(tab))}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
