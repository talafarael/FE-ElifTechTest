import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
export interface ConfirmModalProps {
  handler: () => void
}
export const ConfirmModal: React.FC<ConfirmModalProps> = ({ handler }) => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Confirm remove</DialogTitle>
      </DialogHeader>
      <DialogTrigger asChild className='w-[150px] ml-[20px]'>
        <Button onClick={handler}>Confirm</Button>
      </DialogTrigger>
    </DialogContent>
  )
}
