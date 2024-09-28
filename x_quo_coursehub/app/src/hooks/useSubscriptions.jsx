import { skipToken, useQuery } from "@tanstack/react-query";
import { fetchSubscriptions } from "../apis/subscription";

const useSubscriptions = (learnerId) => {
  return useQuery({
    queryKey: ["subscriptions", { learnerId }],
    queryFn: learnerId
      ? async () => await fetchSubscriptions(learnerId)
      : skipToken,
  });
};

export default useSubscriptions;
