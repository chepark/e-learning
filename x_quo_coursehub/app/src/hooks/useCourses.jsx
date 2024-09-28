import { useQuery } from "@tanstack/react-query";
import { fetchAllCourses } from "../apis/course";

const useCourses = () => {
  return useQuery({
    queryKey: ["courses"],
    queryFn: fetchAllCourses,
  });
};

export default useCourses;
