
export interface IResponseCreate {
  answers: IAnswersResponse[]
  quizId: string;
  passingTime: number;
}
export interface IAnswersResponse {
  questionId: string,
  answer: string | string[]
}

export type UserAnswer = {
  questionId: string;
  answer: string;
};

type QuestionWithAnswer = {
  questionId: string;
  question: string;
  correctAnswers: string[];
  userAnswer: string | null;
};

export type ResponseWithQuestions = {
  id: string;
  quizId: string;
  passingTime: number;
  createdAt: Date;
  answers: QuestionWithAnswer[];
};

