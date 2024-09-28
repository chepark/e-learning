import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../apis/user";

const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });
};

export default useUser;
