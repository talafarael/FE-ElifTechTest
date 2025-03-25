import { useParams } from "next/navigation"
import { useChangeQuestMutation, useCreateQuestMutation, useRemoveQuestMutation } from "../api/useQuest/useQuest"
import { IQuestDefValue, IQuestFormValues } from "../components/CreateQuestionForm"
import { IChangeQuest, ICreateQuest, IRemoveQuest } from "../type/api/Quest"



export const useCreateQuest = () => {
  const createQuestMutation = useCreateQuestMutation()
  const params = useParams()


  const createQuest = async (data: IQuestDefValue) => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id || "";
    const optionsArray = [data.options0, data.options1, data.options2, data.options3].filter(Boolean);
    const transformanswer = optionsArray.length ? optionsArray : undefined;
    const body: ICreateQuest = {
      title: data.title,
      answer: transformanswer as string[] | undefined,
      type: data.type,
      idQuiz: id
    }
    const result = createQuestMutation.mutateAsync(body)
    console.log(result)
    return result

  }
  return { createQuest };
}

export const useChangeeQuest = () => {
  const changeQuestMutation = useChangeQuestMutation()


  const changeQuest = async (data: IQuestDefValue, idQuest: string, handler: () => void) => {
    const optionsArray = [data.options0, data.options1, data.options2, data.options3].filter(Boolean);
    const transformanswer = optionsArray.length ? optionsArray : undefined;
    const body: IChangeQuest = {
      question: data.title,
      answer: transformanswer as string[] | undefined,
      type: data.type,
      idQuest: idQuest
    }
    const res = await changeQuestMutation.mutateAsync(body)
    if (res) {

      handler()
    }
    return res

  }
  return { changeQuest };
}



export const useRemoveQuest = () => {
  const removeQuestMutation = useRemoveQuestMutation()


  const removeQuest = async (id: string) => {
    const body: IRemoveQuest = {
      id: id
    }
    const result = await removeQuestMutation.mutateAsync(body)
    return result

  }
  return { removeQuest };
}

