"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { axiosGet } from "@/src/api/axiosGet";
import { CreateQuestionForm, IQuestDefValue } from "@/src/components/CreateQuestionForm";
import { QuestionCard } from "@/src/components/QuestionCard";
import { QuizCard } from "@/src/components/QuizCard";
import { useQuizGetOne } from "@/src/hooks/useQuiz";
import { IQuest } from "@/src/type/api/Quiz";
import { useState } from "react";

export default function Page() {
  const create: IQuestDefValue = {
    title: "",
    type: "SingleChoice",

  }
  const [stateQuizCreater, setStateQuizCreater] = useState<boolean>()

  const handlerStateQuizCreater = () => {
    setStateQuizCreater(!stateQuizCreater)
  }
  const { data, error, isLoading } = useQuizGetOne()
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Skeleton className="w-[100px] h-[20px] rounded-full" />
      </div>
    );
  }

  return (
    <Card className="flex justify-center flex-col items-center mb-[50px] w-[70vw] shadow-lg border mt-[50px] border-muted ">
      <CardHeader className="w-[90%] flex items-start flex-col">
        <QuizCard data={data} />
      </CardHeader>
      <CardContent className="flex justify-center items-center w-[100%] flex-col">
        {data?.questions.map((elem: IQuest, index: number) => (
          <QuestionCard key={index} question={elem} />
        ))}
        {stateQuizCreater && <CreateQuestionForm handler={handlerStateQuizCreater} typeAction="create" data={create} />}

      </CardContent>
      <CardFooter className="flex items-end justify-end">

        <Button onClick={handlerStateQuizCreater}>add Question</Button>
      </CardFooter>

    </Card>
  );
}
