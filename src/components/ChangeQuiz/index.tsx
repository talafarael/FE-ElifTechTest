"use cleint"
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { IQuizFormValues } from '../CreateQuizForm';
import { ItemInput } from '../ItemInput';
import { CreateQuizFormData } from '../CreateQuizForm/createQuizForm.data';
import { useChangeQuiz } from '@/src/hooks/useQuiz';
import { IQuiz } from '@/src/type/api/Quiz';

interface QuizFormProps {
  data: IQuiz
  handlerCloseQuizChanger: () => void
}

export const QuizForm: React.FC<QuizFormProps> = ({ data, handlerCloseQuizChanger }) => {
  const { changeQuiz } = useChangeQuiz()
  const form = useForm<IQuizFormValues>({
    defaultValues: {
      title: data?.title,
      description: data?.description
    },
  });
  const onSubmit = async (data: IQuizFormValues) => {
    await changeQuiz(data, handlerCloseQuizChanger)

  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {CreateQuizFormData.map((elem, index) => (
          <ItemInput key={index} elem={elem} control={form.control} errors={form.formState.errors} />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
