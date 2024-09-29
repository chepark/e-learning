import { LEARNER_ID } from "../apis/constant";
import CourseCard from "../components/CourseCard";
import LoadingSpinner from "../components/LoadingSpinner";
import useSubscriptions from "../hooks/useSubscriptions";
import StyledMyCoursePage from "./MyCoursePage.style";

function MyCoursePage() {
  const { data: mySubscriptions, isLoading } = useSubscriptions(LEARNER_ID);

  const renderCourseCard = () => {
    return mySubscriptions.length ? (
      mySubscriptions?.map((subscription) => {
        const course = {
          title: subscription["course.title"],
          description: subscription["course.description"],
          duration: subscription["course.duration"],
          sys_id: subscription["course.sys_id"],
        };
        return (
          <CourseCard key={subscription["course.sys_id"]} course={course} />
        );
      })
    ) : (
      <p>No courses subscribed yet.</p>
    );
  };

  return (
    <StyledMyCoursePage>
      <h2>My courses</h2>
      <div className="cousehub__subscribe-courses">
        {isLoading ? <LoadingSpinner /> : renderCourseCard()}
      </div>
    </StyledMyCoursePage>
  );
}

export default MyCoursePage;
