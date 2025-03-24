
import { set } from "react-hook-form";
import { useCreateWindowStore } from "../_store/CreateWindowStateStore";
import { ICreateQuiz, useCreateQuizMutation, useGetOneQuizQuery } from "../api/useQuiz/useQuiz";
import { useParams, useRouter } from "next/navigation";
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

export const useQuizGetOne = (id: string) => {

  const res = useGetOneQuizQuery(id);

  return res;
}
