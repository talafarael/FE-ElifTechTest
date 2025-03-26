import { IResponseCreate } from "@/src/type/api/Reponse";
import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosPost } from "../axiosPost";
import { axiosGet } from "../axiosGet";

export const useResponseCreateMutation = () => {
  return useMutation({
    mutationFn: async (data: IResponseCreate) => {
      return await axiosPost<IResponseCreate>({ path: "response-quiz/create_response", body: data });
    },
  });
};
export const useGetOneResponseQuery = (id: string) => {
  return useQuery({
    queryKey: ["get_one_response"],
    queryFn: async () => await axiosGet({ path: `response-quiz/get_one?id=${id}` }),
  });
};
export const useGetResponseQuery = (id: string) => {
  return useQuery({
    queryKey: ["get_response"],
    queryFn: async () => await axiosGet({ path: `response-quiz/get?id=${id}` }),
  });
};

