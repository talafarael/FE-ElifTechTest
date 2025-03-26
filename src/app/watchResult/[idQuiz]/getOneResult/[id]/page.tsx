"use client"
import { Card } from "@/components/ui/card";
import { useResponseGetOne } from "@/src/hooks/useResponse";
import { SkeletonLoader } from "@/src/components/SkeletonLoader";
import NotFound from "@/src/app/not-found";





export default function Page() {
  const { data, error, isLoading } = useResponseGetOne()
  if (isLoading) <SkeletonLoader />

  if (error) <NotFound />;


  return (
    <Card className="flex flex-col items-center mb-12 w-[70vw] shadow-lg border mt-12 border-muted p-6">
      <h1 className="text-xl font-bold mb-4">Answer user</h1>
      <div className="w-full space-y-4 mb-6">
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold">data:</span> {data?.createdAt}
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold">Time passing:</span> {data?.passingTime} секунд
        </div>
      </div><h1 className="text-xl font-bold mb-4">Ответы пользователя</h1>
      <div className="w-full space-y-4">
        {data?.answers?.map((answer: any) => (
          <div key={answer.questionId} className="border p-4 rounded-lg">
            <p className="font-medium">{answer.question}</p>
            <p className="text-muted-foreground">
              <span className="font-semibold">Ответ пользователя:</span>{" "}
              {answer.userAnswer || "Не ответил"}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}

