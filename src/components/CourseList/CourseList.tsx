import { Course } from "../../types/Course";
import { CourseCard } from "../CourseCard/CourseCard";
import "./CourseList.scss";

type CoursesListProps = {
  courses: Course[];
};

export const CourseList = ({ courses }: CoursesListProps) => {
  return (
    <section className="results">
      <p className="results-found">{courses.length} courses found</p>

      <div className="results-list">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};
