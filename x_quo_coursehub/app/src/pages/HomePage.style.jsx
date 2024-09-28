import styled from "styled-components";

const StyledHomePage = styled.div`
  .coursehub__all-courses {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

export default StyledHomePage;
