import React from 'react'
import SideNav from './_components/SideNav'

import { auth } from '@/auth'
import { redirect } from 'next/navigation'

const layout = async({ children }) => {
  // const session = await auth()
  // if(session?.user?.role !== 'ADMIN')
  // {
  //   redirect('/sign-in')
  // }
  return (
    <main className='mx-auto flex flex-wrap md:flex-nowrap gap-4 min-h-[100vh]'>

      <aside className='w-[300px]'>
        <SideNav/>
      </aside>
      <section className='w-full p-4'>
        {children}
      </section>

    </main>
  )
}

export default layout