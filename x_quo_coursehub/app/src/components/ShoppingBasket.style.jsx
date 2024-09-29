import styled from "styled-components";

const StyledShoppingBasket = styled.div`
  height: 3rem;
  width: 3rem;
  box-sizing: border-box;
  border-radius: 50%;
  border: ${(props) =>
    props.$isCardOnDrag ? "2px dotted #646cff" : "transparent"};
  background-color: ${(props) => (props.$isCardOnBasket ? "#646cff" : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledShoppingBasket;
