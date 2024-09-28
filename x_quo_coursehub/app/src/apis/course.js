import axiosInstance from "./axiosInstance";
import { COURSE_TABLE } from "./constant";

// GET all courses
export const fetchAllCourses = async () => {
  const response = await axiosInstance.get(`${COURSE_TABLE}`);
  const { result } = await response.data;
  return result;
};
