import React from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { QuestionCategory, useCreateQuestForm } from './createQuestForm.data';
import { Button } from '@/components/ui/button';
import { CreateAnswer } from '../CreateAnswer';
import { useCreateQuest } from '@/src/hooks/useQuest';
import { CreateQuest } from '../CreateQuest';

export interface IQuestFormValues {
  title: string
  type: "SingleChoice" | "MultipleChoice" | "Text"
  answer?: string[] | null
  options0?: string
  options1?: string
  options2?: string
  options3?: string
}
export interface IQuestFormValuesForm {
  title: string
  type: string
  answer?: string[] | null


}
export interface IQuestDefValue {
  title: string,
  type: QuestionCategory,
  options0?: string,
  options1?: string,
  options2?: string,
  options3?: string,
}
export interface CreateQuestionFormProps {
  typeAction: "change" | "create"
  data: IQuestDefValue
}
export const CreateQuestionForm: React.FC<CreateQuestionFormProps> = ({ typeAction, data }) => {
  const { createQuest } = useCreateQuest()
  const {
    count,
    setCount,
    createQuestFormData,
    createQuestAnswerData,
    setType,

  } = useCreateQuestForm();
  const methods = useForm<IQuestFormValues>({
    defaultValues: {
      type: data.type,
      title: data.title,
      options0: data.options0,
      options1: data.options1,
      options2: data.options2,
      options3: data.options3

    },
  });

  const onSubmit = async (data: IQuestFormValues) => {
    console.log(data)
  };
  const addAnswer = () => {
    setCount(prevCount => Math.min(prevCount + 1, 4));
  }

  const removeAnswer = () => {
    setCount(prevCount => Math.max(prevCount - 1, 2));
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className='
w-[80%] text-[20px] flex items-start justify-around p-[30px]  flex-col min-h-[300px] bg-secondary
        mt-[20px]

        '>
        <CreateQuest
          createQuestFormData={createQuestFormData}
          setType={setType}
        />
        {createQuestAnswerData && <CreateAnswer createQuestAnswerData={createQuestAnswerData} />}
        {createQuestAnswerData && <div>
          <Button onClick={() => addAnswer()} type='button'>add answer</Button>
          <Button onClick={() => removeAnswer()} type='button'>remvoe answer</Button>

        </div>}

        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};
