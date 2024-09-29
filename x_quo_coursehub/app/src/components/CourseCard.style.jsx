import styled from "styled-components";

const StyledCourseCard = styled.div`
  // visual highlight of the course card on drag
  border: ${(props) =>
    props.$active ? "2px solid #646cff" : "1px solid #a1a1a1"};
  box-shadow: ${(props) =>
    props.$active ? "0 8px 16px rgba(0, 0, 0, 0.2)" : "none"};
  transition: box-shadow 0.2s ease-in-out;

  // disable drag and drop for subscribed courses
  cursor: ${(props) => (props.$subscribed ? "default" : "grab")};

  width: 250px;
  padding: 1rem;

  .coursehub__course-card-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .coursehub__course-title {
    font-weight: bold;
    height: 50px;
  }

  .coursehub__course-description {
    font-size: 0.8rem;
    line-height: 1rem;
    text-overflow: ellipsis;
    height: 50px;
  }

  .coursehub__course-duration {
    font-size: 0.8rem;
    line-height: 1rem;
    height: 20px;
  }

  .coursehub__subscribe-button--active,
  .coursehub__subscribe-button--inactive {
    font-size: 0.7rem;
    margin-top: 1rem;
    float: right;
    color: white;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.3em 0.5em;
    transition: border-color 0.25s;
    line-height: 1.5;
  }

  .coursehub__subscribe-button--active {
    background-color: #8f95ff;
    cursor: pointer;
    &:hover {
      background-color: #646cff;
    }
  }

  .coursehub__subscribe-button--inactive {
    background-color: #a1a1a1;
    cursor: not-allowed;
  }

  .coursehub__unsubscribe-button {
    float: right;
    margin-top: 1rem;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: #646cff;
    }
  }
`;

export default StyledCourseCard;
