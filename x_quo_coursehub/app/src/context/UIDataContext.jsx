import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const UIDataContext = createContext();

export const UIDataContextProvider = ({ children }) => {
  const [cardOnDrag, setCardOnDrag] = useState(null);
  const [isCardOnBasket, setIsCardOnBasket] = useState(false);

  return (
    <UIDataContext.Provider
      value={{ cardOnDrag, setCardOnDrag, isCardOnBasket, setIsCardOnBasket }}
    >
      {children}
    </UIDataContext.Provider>
  );
};

UIDataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
