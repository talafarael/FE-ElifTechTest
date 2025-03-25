export interface ICreateQuest {
  idQuiz: string;
  title: string;
  type: string
  answer?: string[] | undefined;
}
export interface IChangeQuest {
  idQuest: string;
  question: string;
  type: string
  answer?: string[] | undefined;
}

