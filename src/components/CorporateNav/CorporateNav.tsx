import "./CorporateNav.scss";

const corporateTabs = ["Courses", "Lectures", "Quizzes"];

export const CorporateNav = () => {
  return (
    <div className="corporate-info-nav">
      {corporateTabs.map((tab) => (
        <button
          key={tab}
          className={`info-btn ${tab === "Courses" ? "active-nav" : ""}`}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
