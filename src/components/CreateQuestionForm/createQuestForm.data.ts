import { useState } from "react";
export interface IQuestFormValues {
  title: string;
  type: QuestionCategory;
  answer?: string[];
}
export type QuestionCategory = "Text" | "SingleChoice" | "MultipleChoice";

export interface FormFieldConfig {
  name: string;
  type: "text" | "select";
  placeholder: string;
  validation: {
    required: string;
    validate?: (value: string) => boolean | string;
  };
  options?: Array<{ id: string; name: string }>;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface OptionFieldConfig {
  name: string;
  type: "text";
  placeholder: string;
  validation: {
    required: string;
  };
}
export const useCreateQuestForm = () => {
  const [count, setCount] = useState(2);
  const [type, setType] = useState<string>("");

  const createQuestFormData: FormFieldConfig[] = [
    {
      name: "title",
      type: "text",
      placeholder: "Опис",
      validation: {
        required: "Це поле обов'язкове",
        validate: (value: string) =>
          /^[a-zA-Zа-яА-Я\s.,!?-]+$/.test(value) || "Можна вводити тільки літери та основні знаки пунктуації",
      },
    },
    {
      name: "type",
      type: "select",
      placeholder: "type question",
      options: [
        { id: "Text", name: "Text" },
        { id: "SingleChoice", name: "Single Choice" },
        { id: "MultipleChoice", name: "Multiple Choice" },
      ],
      validation: {
        required: "Це поле обов'язкове",
      },
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value as QuestionCategory);
      },

    },
  ];

  const createQuestAnswerData: OptionFieldConfig[] | undefined = type != "Text"
    ? Array.from({ length: count }, (_, index) => ({
      name: `options${index}`,
      type: "text",
      placeholder: `Варіант${index + 1}`,
      validation: {
        required: "Це поле обов'язкове",
      },
    }))
    : undefined;
  return { count, setCount, createQuestFormData, createQuestAnswerData, setType, type };
};
