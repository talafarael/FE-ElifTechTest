import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosPost } from "../axiosPost";
import { ICreateQuest } from "@/src/type/api/Quest";

export const useCreateQuestMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: ICreateQuest) => {
      return await axiosPost<ICreateQuest>({ path: "quest/create_quest", body: data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get_one_quiz"] });
    },
    onError: (error) => {
      console.error("Error creating quiz:", error);
    },
  });
};
