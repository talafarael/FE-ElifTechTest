
import { set } from "react-hook-form";
import { useCreateWindowStore } from "../_store/CreateWindowStateStore";
import { getQuiz, useChangeQuiztMutation, useCreateQuizMutation, useGetOneQuizQuery } from "../api/useQuiz/useQuiz";
import { useParams, useRouter } from "next/navigation";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { ICreateQuiz } from "../type/api/Quiz";
export const useQuizHook = () => {
  const createQuizMutation = useCreateQuizMutation();
  const router = useRouter();
  const { setWindowQuiz } = useCreateWindowStore()

  const createQuiz = async (data: ICreateQuiz) => {
    try {
      const result = await createQuizMutation.mutateAsync(data);

      if (result) {
        setWindowQuiz()
        router.push(`/changeQuiz/${result.id}`);
      }

      return { isLoading: result?.isLoading, error: result.error };

    } catch (error) {
      console.error("Error creating quiz:", error);
      throw error;
    }
  };

  return { createQuiz, createQuizMutation };
};

export const useQuizGetOne = () => {
  const params = useParams()
  const id = Array.isArray(params.id) ? params.id[0] : params.id || "";
  const res = useGetOneQuizQuery(id);
  return res;
}

export const useChangeQuiz = () => {
  const changeQuizMutation = useChangeQuiztMutation()
  const params = useParams()



  const changeQuiz = async (data: ICreateQuiz, handler: () => void) => {
    try {
      const id = Array.isArray(params.id) ? params.id[0] : params.id || "";
      const body = { id, ...data };

      const res = await changeQuizMutation.mutateAsync(body);
      if (res) {
        console.log("work")
        handler();
      }
      return res;
    } catch (error) {
      console.error("Error", error);
      return null;
    }
  };
  return { changeQuiz };
}



