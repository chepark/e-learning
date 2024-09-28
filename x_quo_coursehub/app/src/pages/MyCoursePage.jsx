import { LEARNER_ID } from "../apis/constant";
import CourseCard from "../components/CourseCard";
import useSubscriptions from "../hooks/useSubscriptions";
import StyledMyCoursePage from "./MyCoursePage.style";

function MyCoursePage() {
  const { data: mySubscriptions } = useSubscriptions(LEARNER_ID);
  console.log("my", mySubscriptions);
  return (
    <StyledMyCoursePage>
      <h2>My courses</h2>
      <div className="cousehub__subscribe-courses">
        {mySubscriptions?.map((subscription) => {
          const course = {
            description: subscription["course.description"],
            title: subscription["course.title"],
            duration: subscription["course.duration"],
          };

          return (
            <CourseCard key={subscription["course.sys_id"]} course={course} />
          );
        })}
      </div>
    </StyledMyCoursePage>
  );
}

export default MyCoursePage;
