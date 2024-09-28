import axiosInstance from "./axiosInstance";
import {
  LEARNER_ID,
  LEARNER_TABLE,
  SELECT_FIELDS_FROM_USER_ACCOUNT,
} from "./constant";

// GET user data by username and password
export const fetchUser = async () => {
  const url = `${LEARNER_TABLE}/${LEARNER_ID}?${SELECT_FIELDS_FROM_USER_ACCOUNT}`;

  const response = await axiosInstance.get(url);
  const { result } = await response.data;

  return result;
};
