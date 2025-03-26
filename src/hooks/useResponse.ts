import { useParams, useRouter } from "next/navigation";
import { useResponseCreateMutation } from "../api/useResponse/useResponse";
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
        router.push(`/watchResult/${res.id}`)
      }
      return res;
    } catch (error) {
      console.error("Error", error);
      return null;
    }
  };
  return { responseCreate };
}



