"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { axiosGet } from "@/src/api/axiosGet";
import { CreateQuestionForm, IQuestDefValue } from "@/src/components/CreateQuestionForm";
import { QuestionCard } from "@/src/components/QuestionCard";
import { useQuizGetOne } from "@/src/hooks/useQuiz";
import { IQuest } from "@/src/type/api/Quiz";
interface PageParams {
  params: {
    id: string;
  };
}

export default function Page() {
  const create: IQuestDefValue = {
    title: "",
    type: "SingleChoice",

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
    <Card className="flex justify-center flex-col items-center w-[70vw] shadow-lg border mt-[50px] border-muted ">
      <CardHeader className="w-[90%] flex items-start flex-col">
        <CardTitle className="w-[100%] flex items-start flex-col">
          <h1 className="text-[60px]">{data.title} </h1>
          <p>{data.description}</p>
        </CardTitle>

      </CardHeader>
      <CardContent className="flex justify-center items-center w-[100%] flex-col">
        {data?.questions.map((elem: IQuest, index: number) => (
          <QuestionCard key={index} question={elem} />
        ))}
        <CreateQuestionForm typeAction="create" data={create} />

      </CardContent>
      <CardFooter className="flex items-end justify-end">

        <Button>add Question</Button>
      </CardFooter>

    </Card>
  );
}
