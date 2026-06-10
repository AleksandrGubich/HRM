import { courses } from "../../data/courses";
import { CorporateNav } from "../CorporateNav/CorporateNav";
import { CourseFilters } from "../CourseFilters/CourseFilters";
import { CourseList } from "../CourseList/CourseList";
import { Pagination } from "../Pagination/Pagination";
import "./CorporateInfo.scss";

export const CorporateInfo = () => {
  return (
    <section className="corporate-info">
      <div className="corporate-container">
        <CorporateNav />
        <CourseFilters />
        <CourseList courses={courses} />
        <Pagination />
      </div>
    </section>
  );
};
