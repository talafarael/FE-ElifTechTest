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
  console.log(data)
  return (
    <Card>
      {data.title}
      <Button onClick={() => router.push(`/changeQuiz/${data.id}`)} >
        Change Quiz
      </Button>
    </Card>
  )
}

