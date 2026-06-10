import { LargeArrowLeft } from "../../assets/svg-images/LargeArrowLeft";
import { LargeArrowRight } from "../../assets/svg-images/LargeArrowRight";
import { RedArrowDown } from "../../assets/svg-images/RedArrowDown";
import "./Pagination.scss";

const pages = [1, 2, 3, 4, 5];

export const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination-left">
        <button className="pagination-btn">
          <LargeArrowLeft />
        </button>

        {pages.map((page) => (
          <button
            key={page}
            type="button"
            className={`pagination-page ${page === 1 ? "active-page" : ""}`}
          >
            {page}
          </button>
        ))}

        <span className="pagination-dots">...</span>
        <button className="pagination-page" type="button">
          15
        </button>
        <button className="pagination-btn">
          <LargeArrowRight />
        </button>
        <button className="pagination-size">
          50
          <RedArrowDown />
        </button>
        <div className="pagination-center">
          <input className="pagination-input" value="1" />
        </div>
      </div>
    </div>
  );
};
