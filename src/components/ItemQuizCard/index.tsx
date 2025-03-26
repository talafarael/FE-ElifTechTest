"use client"
import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { QuizResponse } from '@/src/type/api/Quiz'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
interface ItemQuizCardProps {
  data: any
}
export const ItemQuizCard: React.FC<ItemQuizCardProps> = ({ data }) => {
  const router = useRouter();
  return (
    <Card className='w-[350px] h-[250px] p-[20px] flex flex-col items-start justify-between'>
      <CardHeader className='p-[0px] flex flex-row justify-between items-center w-[100%]'>
        <div>
          <h1 className='text-[40px]'>{data.title}</h1>
          <p>{data.description}</p>
        </div>
        <p className='text-[18px]'>count question:{data?.questions?.length}</p>

      </CardHeader>
      <CardFooter className='flex justify-between w-[100%] items-end'>
        <Button onClick={() => router.push(`/inQuiz/${data.id}`)}>
          Start
        </Button>
        <Button onClick={() => router.push(`/watchResult/${data.id}`)}>
          Result
        </Button>
        <Button onClick={() => router.push(`/changeQuiz/${data.id}`)} >
          Change Quiz
        </Button>
      </CardFooter>

    </Card>
  )
}

