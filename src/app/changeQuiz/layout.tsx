import { Dialog } from '@/components/ui/dialog';
import { BreadcrumbComponent } from '@/src/components/Breadcrumb';
import React from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className='w-[98vw] flex justify-center items-center flex-col'>
      <Dialog>
        <BreadcrumbComponent />
        {children}
      </Dialog>
    </div>
  )
}
