import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSubscription } from "../apis/subscription";

function useDeleteSubscription() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ subscriptionId }) => deleteSubscription(subscriptionId),
    onSuccess: () => {
      queryClient.invalidateQueries(["subscriptions"]);
    },
  });
}

export default useDeleteSubscription;
