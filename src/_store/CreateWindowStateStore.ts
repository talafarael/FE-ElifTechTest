import { create } from "zustand";

export interface ICreateWindowStore {
  windowQuiz: boolean

  setWindowQuiz: () => void;
}

export const useCreateWindowStore = create<ICreateWindowStore>((set) => ({
  windowQuiz: false,
  setWindowQuiz: () => set((state) => ({ windowQuiz: !state.windowQuiz })),
}));
