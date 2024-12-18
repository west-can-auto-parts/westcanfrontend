import React from 'react'
import Hero from './_components/Hero'
import Content from './_components/Content'
import Form from './_components/Form'
const page = () => {
    return (
        <main className='bg-gray-100'>
            <Hero />
            <div className="bg-white w-10/12 flex flex-wrap md:flex-nowrap gap-4 mx-auto py-6 md:py-12">
                <Content />
                <Form />
            </div>
        </main>
    )
}

export default page