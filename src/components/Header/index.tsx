"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { useCreateWindowStore } from '@/src/_store/CreateWindowStateStore'
export const Header = () => {
  const { setWindowQuiz } = useCreateWindowStore()
  return (
    <div className=" bg-secondary h-[100px] flex items-center  px-6 w-[100vw] justify-between">
      <h1 className='text-[20px] text-dark '>Title</h1>
      <Button onClick={() => setWindowQuiz()} variant="outline" className='h-[50px] w-[220px]'>Create Quiz</Button>
    </div>
  )
}
