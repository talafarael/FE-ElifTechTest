import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import { QuestionCategory, useCreateQuestForm } from './createQuestForm.data';
import { Button, buttonVariants } from '@/components/ui/button';
import { CreateAnswer } from '../CreateAnswer';
import { useChangeeQuest, useCreateQuest } from '@/src/hooks/useQuest';
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
export interface CreateQuestionFormBase {
  typeAction: "create" | "change";
  data: IQuestDefValue;
  handler: () => void;
}

export interface CreateQuestionFormChange extends CreateQuestionFormBase {
  typeAction: "change";
  id: string;
}

export interface CreateQuestionFormCreate extends CreateQuestionFormBase {
  typeAction: "create";
  id?: never;
}
export type CreateQuestionFormProps = CreateQuestionFormChange | CreateQuestionFormCreate;
export const CreateQuestionForm: React.FC<CreateQuestionFormProps> = ({ typeAction, data, id, handler }) => {
  const { createQuest } = useCreateQuest()
  const { changeQuest } = useChangeeQuest()

  const {
    count,
    setCount,
    createQuestFormData,
    createQuestAnswerData,
    setType,
    type
  } = useCreateQuestForm();
  const methods = useForm<IQuestFormValues>({
    defaultValues: typeAction == "change" ? {
      type: data.type,
      title: data.title,
      options0: data.options0,
      options1: data.options1,
      options2: data.options2,
      options3: data.options3
    } : {
      type: "Text",
      title: "",
    }
  });
  useEffect(() => {
    if (typeAction == "change") {
      setType(data.type);
    } else {
      setType("Text")
    }
  }, [])
  const onSubmit = async (data: IQuestFormValues) => {
    typeAction == "create" ? createQuest(data) : changeQuest(data, id, handler)
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
        /><div className='flex justify-between'>
          {createQuestAnswerData && <CreateAnswer createQuestAnswerData={createQuestAnswerData} />}
          {createQuestAnswerData && <div>
            <Button onClick={() => addAnswer()} type='button' className='mr-[10px]'>add answer</Button>
            <Button onClick={() => removeAnswer()} type='button'>remvoe answer</Button>
          </div>}
        </div>

        <div className='flex justify-between w-[100%] items-center'>
          <Button className='w-[100px]' type="submit">Submit</Button>
          <Button onClick={handler} className={buttonVariants({ variant: "destructive" })}>Cancel</Button>
        </div>

      </form>
    </FormProvider>
  );
};
