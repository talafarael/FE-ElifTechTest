import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { IQuest } from '@/src/type/api/Quiz'
import React, { useState } from 'react'
import { CreateQuestionForm, IQuestDefValue } from '../CreateQuestionForm'
import { QuestionCategory } from '../CreateQuestionForm/createQuestForm.data'

export interface QuestionCardProps {
  question: IQuest
}
export const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [stateChange, setStateChange] = useState<boolean>(false)
  const handlerChagneCard = () => setStateChange(!stateChange)
  if (stateChange) {
    const create: IQuestDefValue = {
      title: question.question,
      type: question.type as QuestionCategory,
      options0: question.answer[0],
      options1: question.answer[1],
      options2: question.answer[2],
      options3: question.answer[3],
    }
    return (<CreateQuestionForm typeAction="change" data={create} handler={handlerChagneCard} id={question.id} />
    )
  }

  return (
    <Card className="w-[80%] text-[20px] flex items-start justify-around p-[30px]  flex-col h-[300px] bg-secondary mt-[20px]">
      < CardTitle className='text-[45px]' > {question.question}</CardTitle >
      <CardContent className=' p-0 flex items-start flex-col'>
        <h1 className='text-[30px]'>{question.type}</h1>

        {question.answer.map((elem, index) => (
          <li key={index} className='ml-[10px]'>{elem}</li>
        ))}
      </CardContent>
      <CardFooter className='flex items-end m-0 p-0 justify-end w-[100%] h-[100%]'>
        <Button onClick={handlerChagneCard} >
          Change
        </Button>
        <Button >
          Remove
        </Button>

      </CardFooter>

    </Card >
  )
}
