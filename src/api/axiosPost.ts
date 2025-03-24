import axios from "axios";
export interface IAxiosPost<T> {
  path: string
  body: T
}
export const axiosPost = async <T>({ path, body }: IAxiosPost<T>) => {
  const response = await axios.post(`${process.env.API_PORT}${path}`, body);
  return response.data;
};


