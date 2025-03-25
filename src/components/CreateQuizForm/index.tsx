"use client"
import React from 'react'
import { WindowCreateQuiz } from '../WindowCreateQuiz'
import { Form, FormProvider, set, useForm } from "react-hook-form";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { CreateQuizFormData } from './createQuizForm.data';
import { useQuizHook } from '@/src/hooks/useQuiz';
import { useCreateQuizMutation } from '@/src/api/useQuiz/useQuiz';
import { useCreateWindowStore } from '@/src/_store/CreateWindowStateStore';
import { ICreateQuiz } from '@/src/type/api/Quiz';
export interface QuizFormField {
  name: "title" | "description";
  type: string;
  placeholder: string;
  validation: {
    required: string;
    validate: (value: string) => boolean | string;
  };
}
export interface IQuizFormValues {
  title: string;
  description: string;
}
export const CreateQuizForm = () => {
  const { windowQuiz, setWindowQuiz } = useCreateWindowStore()
  const { createQuiz } = useQuizHook();
  const methods = useForm<IQuizFormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = async (data: ICreateQuiz) => {
    const result = await createQuiz(data)
  };
  return (
    windowQuiz ? (
      <div className="flex justify-center w-[100vw] items-center min-h-screen absolute ">
        <Card className="w-[450px] ">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <WindowCreateQuiz createQuizFormData={CreateQuizFormData} />
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setWindowQuiz()}>Cancel</Button> <Button type='submit'>Deploy</Button>
              </CardFooter>
            </form>
          </FormProvider>

        </Card>
      </div>
    ) : null
  );
}
