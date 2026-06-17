import { Link, Navigate, useParams } from "react-router";
import { useGetCourseByIdQuery } from "../../features/courses/coursesApi";
import "./CourseDetailsPage.scss";

export const CourseDetailsPage = () => {
  const { id } = useParams();
  const courseId = Number(id);
  const isInvalidCourseId = !id || Number.isNaN(courseId);
  const {
    data: course,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useGetCourseByIdQuery(courseId, {
    skip: isInvalidCourseId,
  });

  if (isInvalidCourseId) {
    return <Navigate to="/content" replace />;
  }

  return (
    <main className="course-details-page">
      <div className="course-details-container">
        <Link to="/content" className="back-link">
          Back to courses
        </Link>

        {isLoading && <p className="details-status">Loading course...</p>}

        {isError && (
          <div className="details-error">
            <p>Failed to load course details</p>

            <button type="button" onClick={() => refetch()}>
              Try again
            </button>
          </div>
        )}

        {course && (
          <article className="course-details-card">
            <div className="course-details-header">
              <div>
                <p className="course-label">Course details</p>
                <h1>{course.title}</h1>
              </div>
              <span className="course-badge">{course.type}</span>
            </div>

            {isFetching && <p className="details-status">Updating course...</p>}

            <div className="course-details-grid">
              <div className="details-field">
                <p className="field-title">Category</p>
                <p className="field-value">{course.category}</p>
              </div>
              <div className="details-field">
                <p className="field-title">Number of students</p>
                <p className="field-value">{course.studentsAmount}</p>
              </div>
              <div className="details-field">
                <p className="field-title">Passed education</p>
                <p className="field-value">{course.passedAmount}</p>
              </div>
              <div className="details-field">
                <p className="field-title">Course ID</p>
                <p className="field-value">{course.id}</p>
              </div>
            </div>
            <section className="course-description">
              <h2>Description</h2>
              <p>
                This page shows detailed information about the selected course.
                The data is loaded from DummyJSON API and transformed into the
                internal Course model used by the application.
              </p>
            </section>
          </article>
        )}
      </div>
    </main>
  );
};
