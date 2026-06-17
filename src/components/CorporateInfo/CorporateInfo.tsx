import { useGetCoursesQuery } from "../../features/courses/coursesApi";
import { CorporateNav } from "../CorporateNav/CorporateNav";
import { CourseFilters } from "../CourseFilters/CourseFilters";
import { CourseList } from "../CourseList/CourseList";
import { Pagination } from "../Pagination/Pagination";
import "./CorporateInfo.scss";

export const CorporateInfo = () => {
  const { data, isLoading, isError, isFetching, refetch } = useGetCoursesQuery({
    limit: 4,
    skip: 0,
  });

  return (
    <section className="corporate-info">
      <div className="corporate-container">
        <CorporateNav />
        <CourseFilters />

        {isLoading && <p>Loading courses...</p>}
        {isError && (
          <div>
            <p>Failed to load courses</p>
            <button type="button" onClick={() => refetch()}>
              Try again
            </button>
          </div>
        )}

        {data && (
          <>
            {isFetching && <p>Updating courses...</p>}
            <CourseList courses={data.courses} />
          </>
        )}
        <Pagination />
      </div>
    </section>
  );
};
