import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import useSubscriptions from "../hooks/useSubscriptions";
import useDeleteSubscription from "../hooks/useDeleteSubscription";
import useAddSubscription from "../hooks/useAddSubscription";
import useUIDataContext from "../hooks/useUIDataContext";
import formatDuration from "../utils/formatDuration";
import { LEARNER_ID } from "../apis/constant";
import StyledCourseCard from "./CourseCard.style";

function CourseCard({ course }) {
  const { data: mySubscriptions } = useSubscriptions(LEARNER_ID);
  const { mutate: addSubscription } = useAddSubscription();
  const { mutate: deleteSubscription } = useDeleteSubscription();
  const { cardOnDrag: activeCard, setCardOnDrag } = useUIDataContext();
  const { pathname } = useLocation();

  const subscribed =
    mySubscriptions?.find(
      (subscription) => subscription["course.sys_id"] === course.sys_id
    ) ?? false;

  const renderSubscribeButton = (course) => {
    const btnVariant = subscribed ? "--inactive" : "--active";

    return (
      <button
        className={`coursehub__subscribe-button${btnVariant}`}
        disabled={subscribed}
        onClick={() => {
          addSubscription({ learnerId: LEARNER_ID, courseId: course.sys_id });
        }}
      >
        {subscribed ? "subscribed" : "subscribe"}
      </button>
    );
  };

  const renderUnsubscribeButton = () => {
    return (
      <button
        className="coursehub__unsubscribe-button"
        onClick={() => {
          deleteSubscription({ subscriptionId: subscribed.sys_id });
        }}
      >
        Unsubscribe
      </button>
    );
  };

  /**
   * Enable drag and drop functionality only on the home page and for courses that are not subscribed
   */
  const enableDrag = () => {
    if (
      pathname === "/e-learning/mycourses" ||
      (pathname === "/e-learning" && subscribed)
    )
      return false;
    return true;
  };

  const onMainPage = pathname === "/e-learning/" || pathname === "/e-learning/";
  const onMyCoursesPage = pathname === "/e-learning/mycourses";

  return (
    <StyledCourseCard
      draggable={enableDrag(course)}
      onDragStart={() => setCardOnDrag(course.sys_id)}
      onDragEnd={() => setCardOnDrag(null)}
      $active={activeCard === course.sys_id}
      $subscribed={subscribed}
    >
      <div className="coursehub__course-card-content">
        <div className="coursehub__course-title">{course.title}</div>
        <div className="coursehub__course-description">
          {course.description}
        </div>
        <div className="coursehub__course-duration">
          Duration: {formatDuration(course.duration)}
        </div>
      </div>
      {onMainPage && renderSubscribeButton(course)}
      {onMyCoursesPage && renderUnsubscribeButton()}
    </StyledCourseCard>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    sys_id: PropTypes.string.isRequired,
  }).isRequired,
  activeCard: PropTypes.string,
  setCardOnDrag: PropTypes.func,
};

export default CourseCard;
