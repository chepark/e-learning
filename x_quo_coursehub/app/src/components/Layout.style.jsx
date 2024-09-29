import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  header {
    border-bottom: 1px solid #a1a1a1;

    .coursehub__header-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 900px;
      width: 100%;
      margin: 0 auto;
      padding-left: 2rem;
      padding-right: 2rem;
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

    .coursehub__shopping-basket {
      height: 2rem;
      width: 2rem;
      border: 1px solid #a1a1a1;
    }
  }

  main {
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  footer {
    border-top: 1px solid #a1a1a1;
    text-align: center;
    padding: 0.5rem;
    margin-top: 3rem;
  }
`;

export default StyledLayout;
