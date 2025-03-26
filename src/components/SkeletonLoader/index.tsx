
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export const SkeletonLoader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Skeleton className="w-[100px] h-[20px] rounded-full" />
    </div>
  )
}
