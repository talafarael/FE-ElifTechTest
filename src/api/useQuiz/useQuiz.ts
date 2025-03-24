import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosPost } from "../axiosPost";
import { axiosGet } from "../axiosGet";

export interface ICreateQuiz {
  title: string
  description: string
}
export const useCreateQuizMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: ICreateQuiz) => {
      return await axiosPost<ICreateQuiz>({ path: "quiz/create_quiz", body: data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["quiz"] });
    },
    onError: (error) => {
      console.error("Error creating quiz:", error);
    },
  });
};
export const useGetOneQuizQuery = (id: string) => {
  return useQuery({
    queryKey: ["get_one_quiz"],
    queryFn: async () => await axiosGet({ path: `/quiz/get_one?id=${id}` }),
  });
};

export const useGetQuizQuery = () => {
  return useQuery({
    queryKey: ["quiz"],
    queryFn: async () => await axiosGet({ path: "/path" }),
  });
};
