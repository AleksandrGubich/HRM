import { Link } from "react-router";
import participants from "../../assets/Participants.png";
import { Course } from "../../types/Course";
import { RedEyeIcon } from "../../assets/svg-images/RedEyeIcon";
import "./CourseCard.scss";

type CourseCardProps = {
  course: Course;
};

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/courses/${course.id}`} className="course-card-link">
      <article className="result">
        <div className="icon-name-type">
          <RedEyeIcon />
          <div className="name-type">
            <h3 className="name">{course.title}</h3>
            <p className="type">{course.type}</p>
          </div>
        </div>
        <div className="result-field">
          <p>Category</p>
          <p>{course.category}</p>
        </div>
        <div className="result-field">
          <p>Number of students</p>
          <p>{course.studentsAmount}</p>
        </div>
        <div className="result-field">
          <p>Passed education</p>
          <p>{course.passedAmount}</p>
        </div>
        <img src={participants} alt="Participants" />
      </article>
    </Link>
  );
};
