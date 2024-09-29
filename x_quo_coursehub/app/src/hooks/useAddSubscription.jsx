import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSubscription } from "../apis/subscription";

function useAddSubscription() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ learnerId, courseId }) =>
      addSubscription(learnerId, courseId),
    onSuccess: () => {
      queryClient.invalidateQueries(["subscriptions"]);
    },
  });
}

export default useAddSubscription;
