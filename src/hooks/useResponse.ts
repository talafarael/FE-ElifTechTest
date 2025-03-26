import { useParams, useRouter } from "next/navigation";
import { useGetOneResponseQuery, useGetResponseQuery, useResponseCreateMutation } from "../api/useResponse/useResponse";
import { IAnswersResponse, IResponseCreate } from "../type/api/Reponse";

export const useResponseCreate = () => {
  const createResponseMutation = useResponseCreateMutation()
  const params = useParams()
  const router = useRouter();



  const responseCreate = async (data: IAnswersResponse[], time: number) => {
    try {
      const id = Array.isArray(params.id) ? params.id[0] : params.id || "";

      const body: IResponseCreate = {
        answers: data,
        passingTime: time,
        quizId: id
      }
      const res = await createResponseMutation.mutateAsync(body);
      if (res) {
        localStorage.removeItem("formData")
        router.push(`/watchResult/${id}/getOneResult/${res.id}`)
      }
      return res;
    } catch (error) {
      console.error("Error", error);
      return null;
    }
  };
  return { responseCreate };
}


export const useResponseGetOne = () => {
  const params = useParams()
  const id = Array.isArray(params.id) ? params.id[0] : params.id || "";
  const res = useGetOneResponseQuery(id);
  return res;
}
export const useResponseGet = () => {
  const params = useParams()
  const id = Array.isArray(params.idQuiz) ? params.idQuiz[0] : params.idQuiz || "";
  const res = useGetResponseQuery(id);
  return res;
}

