import { QuizFormField } from ".";

export const CreateQuizFormData: QuizFormField[] = [
  {
    name: "title",
    type: "text",
    placeholder: "Назва",
    validation: {
      required: "Це поле обов'язкове",
      validate: (value: string) => /^[a-zA-Zа-яА-Я\s]+$/.test(value) || "Можна вводити тільки літери",
    },
  },
  {
    name: "description",
    type: "text",
    placeholder: "опис",
    validation: {
      required: "Це поле обов'язкове",
      validate: (value: string) => /^[a-zA-Zа-яА-Я\s]+$/.test(value) || "Можна вводити тільки літери"
    },
  },
]

