import { IResponseCreate } from "@/src/type/api/Reponse";
import { useMutation } from "@tanstack/react-query";
import { axiosPost } from "../axiosPost";

export const useResponseCreateMutation = () => {
  return useMutation({
    mutationFn: async (data: IResponseCreate) => {
      return await axiosPost<IResponseCreate>({ path: "response-quiz/create_response", body: data });
    },
  });
};

