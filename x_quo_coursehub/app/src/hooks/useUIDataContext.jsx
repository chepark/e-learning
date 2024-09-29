import { useContext } from "react";
import { UIDataContext } from "../context/UIDataContext";

const useUIDataContext = () => {
  const uiData = useContext(UIDataContext);
  return uiData;
};

export default useUIDataContext;
