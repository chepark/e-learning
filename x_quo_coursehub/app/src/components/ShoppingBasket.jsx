import { FaBasketShopping } from "react-icons/fa6";
import useAddSubscription from "../hooks/useAddSubscription";
import useUIDataContext from "../hooks/useUIDataContext";
import { LEARNER_ID } from "../apis/constant";
import StyledShoppingBasket from "./ShoppingBasket.style";

function ShoppingBasket() {
  const { mutate: addSubscription } = useAddSubscription();
  const {
    cardOnDrag: courseOnDrag,
    setIsCardOnBasket,
    isCardOnBasket,
  } = useUIDataContext();

  return (
    <StyledShoppingBasket
      onDragEnter={() => {
        setIsCardOnBasket(true);
      }}
      onDragLeave={() => {
        setIsCardOnBasket(false);
      }}
      onDrop={() => {
        setIsCardOnBasket(false);
        addSubscription({ learnerId: LEARNER_ID, courseId: courseOnDrag });
      }}
      onDragOver={(e) => e.preventDefault()} // Required for onDrop to work
      $isCardOnBasket={isCardOnBasket}
      $isCardOnDrag={courseOnDrag}
    >
      <FaBasketShopping
        style={isCardOnBasket ? { color: "white" } : { color: "black" }}
      />
    </StyledShoppingBasket>
  );
}

export default ShoppingBasket;
