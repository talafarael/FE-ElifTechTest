import { useQuizGetOne } from "@/src/hooks/useQuiz"
import { IQuest } from "@/src/type/api/Quiz"
import { InputData } from "@/src/type/DataInput";
import { useEffect, useState } from "react";



export const useQuizFormData = () => {
  const { data, error, isLoading } = useQuizGetOne();
  const [quizForm, setQuizForm] = useState<InputData[]>([]);

  useEffect(() => {
    if (!data) return;

    const form = data.questions.map((elem: IQuest) => {
      const field: InputData = {
        name: elem.id,
        type: elem.type,
        placeholder: "Назва",
        validation: {
          required: "Це поле обов'язкове"
        },
      };

      if (elem.type !== "Text") {
        field.options = elem.answer.map((ans) => {
          return { id: ans, name: ans }
        });
      }

      return field;
    });

    setQuizForm(form);
  }, [data]);

  return { quizForm, isLoading, error };
};

