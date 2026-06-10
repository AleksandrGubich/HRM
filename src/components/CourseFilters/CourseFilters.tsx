import { SearchInput } from "../SearchInput/SearchInput";
import { ArrowDown } from "../../assets/svg-images/ArrowDown";
import "./CourseFilters.scss";

export const CourseFilters = () => {
  return (
    <div className="search-and-filter">
      <SearchInput placeholder="Course name" />

      <div className="filter">
        <label className="filter-type">
          <input
            type="text"
            placeholder="Author: Brooklyn Simmons"
            className="filter-type-field"
          />
          <ArrowDown className="arrow-down" />
        </label>

        <button className="reset-btn" type="button">
          Reset
        </button>
        <button className="apply-btn" type="button">
          Apply
        </button>
      </div>
    </div>
  );
};
