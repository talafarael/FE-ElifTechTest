"use client"
import { Button } from '@/components/ui/button'
import { CardContent, CardTitle } from '@/components/ui/card'
import { IQuiz } from '@/src/type/api/Quiz'
import { Divide } from 'lucide-react'
import React, { useState } from 'react'
import { QuizForm } from '../ChangeQuiz'

export interface QuizCardProps {
  data: IQuiz

}
export const QuizCard: React.FC<QuizCardProps> = ({ data }) => {
  const [changeQuiz, setChangeQuiz] = useState<boolean>(false)
  const hanlderChangeQuiz = () => setChangeQuiz(!changeQuiz)
  return (
    <CardContent className="w-[100%] flex items-center justify-between ">
      {!changeQuiz ? (
        <div>
          <h1 className="text-[60px]">{data.title}</h1>
          <p>{data.description}</p>
        </div>
      ) : (
        <QuizForm handlerCloseQuizChanger={hanlderChangeQuiz} data={data} />
      )}
      <Button onClick={hanlderChangeQuiz}>Change Quiz</Button>

    </CardContent >
  )
}
