import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosPost } from "../axiosPost";
import { IChangeQuest, ICreateQuest } from "@/src/type/api/Quest";

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


export const useChangeQuestMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IChangeQuest) => {
      return await axiosPost<IChangeQuest>({ path: "quest/change_quest", body: data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get_one_quiz"] });
    },
    onError: (error) => {
      console.error("Error creating quiz:", error);
    },
  });
};


export const useRemoveQuestMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IChangeQuest) => {
      return await axiosPost<IChangeQuest>({ path: "quest/remove_quest", body: data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get_one_quiz"] });
    },
    onError: (error) => {
      console.error("Error creating quiz:", error);
    },
  });
};

