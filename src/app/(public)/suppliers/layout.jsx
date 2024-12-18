import React from 'react'

import { PageHeading } from '@/components/page-heading'

const layout = ({ children }) => {
  return (
    <main className='py-2 md:py-4 bg-gray-100'>
      <PageHeading siteTitle={"Suppliers"} />
      {children}
    </main>
  )
}

export default layout