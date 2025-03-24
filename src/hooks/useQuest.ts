import { useParams } from "next/navigation"
import { useCreateQuestMutation } from "../api/useQuest/useQuest"
import { IQuestFormValues } from "../components/CreateQuestionForm"
import { ICreateQuest } from "../type/api/Quest"



export const useCreateQuest = () => {
  const createQuestMutation = useCreateQuestMutation()
  const params = useParams()


  const createQuest = async (data: IQuestFormValues) => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id || "";
    const body: ICreateQuest = {
      title: data.title,
      answer: data.answer ? data.answer : undefined,
      type: data.type,
      idQuiz: id
    }
    const result = createQuestMutation.mutateAsync(body)
    console.log(result)
    return result

  }
  return { createQuest };
}
