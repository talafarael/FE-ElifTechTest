
export interface IResponseCreate {
  answers: IAnswersResponse[]
  quizId: string;
  passingTime: number;
}
export interface IAnswersResponse {
  questionId: string, answer: string | string[]
}
