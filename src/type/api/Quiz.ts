export interface QuizResponse {
  data: any[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IQuiz {
  id: string
  title: string
  description: string
  responses: any[]
  questions: IQuest[]
}

export interface IQuest {
  id: string,
  quizId: string
  question: string
  type: string,
  answer: string[]
}


export interface ICreateQuiz {
  title: string
  description: string
}
export interface IChangeQuiz extends ICreateQuiz {
  id: string
}
