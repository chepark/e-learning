import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;

  header {
    border-bottom: 1px solid #a1a1a1;

    .coursehub__header-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
    }
  }

  .coursehub__menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;

    ul {
      list-style-type: none;
    }
  }

  main {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
  }
`;

export default StyledLayout;
