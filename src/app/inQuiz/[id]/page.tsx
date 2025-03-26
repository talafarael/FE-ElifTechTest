"use client"
import { Skeleton } from '@/components/ui/skeleton';
import { useQuizGetOne } from '@/src/hooks/useQuiz'
import React from 'react'
import NotFound from '../../not-found';
import { Card } from '@/components/ui/card';
import { QuizForm } from '@/src/components/QuizForm';

export default function Page() {

  return (
    <Card className="flex justify-center flex-col items-center mb-[50px] w-[70vw] shadow-lg border mt-[50px] border-muted ">
      <QuizForm />

    </Card>
  )
}
