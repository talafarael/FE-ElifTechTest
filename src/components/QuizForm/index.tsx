"use client"
import { IQuest } from '@/src/type/api/Quiz'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuizFormData } from './quizForm.data';
import NotFound from '@/src/app/not-found';
import { ItemInputSelect } from '../ItemInputSelect';
import { ItemInput } from '../ItemInput';
import { ItemMultiSelectInput } from '../ItemMultiSelectInput';
import { useParams } from 'next/navigation';
import { IAnswersResponse } from '@/src/type/api/Reponse';
import { useResponseCreate } from '@/src/hooks/useResponse';
import { getParse, saveStorageParse, updatetTime } from '@/src/utils/QuizStorage';
import { SkeletonLoader } from '../SkeletonLoader';
export type QuizFormFields = {
  [key: string]: string | string[];
};
export const QuizForm = () => {
  const { quizForm, isLoading, error } = useQuizFormData();
  const [dataSave, setDataSave] = useState<QuizFormFields>()
  const [errorRes, setErrorRes] = useState()
  const params = useParams()
  const { responseCreate } = useResponseCreate()
  useEffect(() => {
    const parserData = getParse(params)
    if (parserData && parserData.obj) setDataSave(parserData.obj)
  }, [])
  setInterval(() => {
    updatetTime(params, 10)
  }, 10000)

  const form = useForm<QuizFormFields>({
    mode: "onBlur",
    defaultValues: dataSave,
  });
  useEffect(() => {
    if (dataSave) {
      form.reset(dataSave);
    }
  }, [dataSave, form]);
  useEffect(() => {
    form.watch((value) => {
      saveStorageParse(params, value)
    });
  }, [form.watch]);
  if (isLoading) <SkeletonLoader />

  if (error) {
    return <NotFound />;
  }

  const onSubmit = (data: QuizFormFields) => {
    const valuesWithNames: IAnswersResponse[] = Object.entries(data).map(([name, value]) => ({
      questionId: name,
      answer: value
    }));
    const parserData = getParse(params)
    const time = parserData?.passingTime || 0

    const res: any = responseCreate(valuesWithNames, time)

    if (res.error) {
      setErrorRes(res.error)
    };
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 max-w-md mx-auto">
        {quizForm.map((elem, index) => (
          elem.type === "Text" ? (
            <ItemInput key={index} errors={form.formState.errors} control={form.control} elem={elem} />
          ) : elem.type === "SingleChoice" ? (
            <ItemInputSelect key={index} errors={form.formState.errors} control={form.control} elem={elem} />
          ) : elem.type == "MultipleChoice" ? (
            <ItemMultiSelectInput key={index} errors={form.formState.errors} control={form.control} elem={elem} />
          ) : null))}
        <h1>{errorRes}</h1>
        <Button type="submit" >
          Submit
        </Button>
      </form>
    </Form>
  );
};
