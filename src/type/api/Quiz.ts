export interface QuizResponse {
  data: any[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface Quiz {
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
