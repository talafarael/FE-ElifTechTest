import { InfiniteData, QueryClient, useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosPost } from "../axiosPost";
import { axiosGet } from "../axiosGet";
import { IChangeQuiz, ICreateQuiz, QuizResponse } from "@/src/type/api/Quiz";




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
    queryFn: async () => await axiosGet({ path: `quiz/get_one?id=${id}` }),
  });
};

export const getQuiz = async ({ pageParam = 1, sortBy = "title", excludeEmpty = true }) => {
  const limit = 10;
  const res = await axiosGet({
    path: `quiz/get?page=${pageParam}&limit=${limit}&sortBy=${sortBy}&excludeEmpty=${excludeEmpty}`,
  });
  return res;
};

export const useGetQuizQuery = (sortBy: string, excludeEmpty: boolean) => {
  return useInfiniteQuery({
    queryKey: ["quizGet", sortBy],
    queryFn: ({ pageParam }) => getQuiz({ pageParam, sortBy, excludeEmpty }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.length === 10 ? allPages.length + 1 : undefined;
    },
  });
};

export const useChangeQuiztMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: IChangeQuiz) => {
      return await axiosPost<IChangeQuiz>({ path: "quiz/change_quiz", body: data });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get_one_quiz"] });
    },
    onError: (error) => {
      console.error("Error creating quiz:", error);
    },
  });
};
