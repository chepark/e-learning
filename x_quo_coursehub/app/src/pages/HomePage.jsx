import CourseCard from "../components/CourseCard";
import LoadingSpinner from "../components/LoadingSpinner";
import useCourses from "../hooks/useCourses";
import StyledHomePage from "./HomePage.style";

function HomePage() {
  const { data: courses, isFetching } = useCourses();

  console.log(courses);
  return (
    <StyledHomePage>
      <h2>All courses</h2>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <div className="coursehub__all-courses">
          {courses?.map((course) => (
            <CourseCard key={course.sys_id} course={course} />
          ))}
        </div>
      )}
    </StyledHomePage>
  );
}

export default HomePage;
