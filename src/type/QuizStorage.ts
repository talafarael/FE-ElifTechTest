type QuizFormFields = {
  [key: string]: string | string[];
};
export interface IQuizStorage {
  idQuiz: string,
  obj: QuizFormFields,
  passingTime: number
}
