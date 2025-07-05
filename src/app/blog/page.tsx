import React from 'react'
import JumboTron from '../(home)/_components/JumboTron'
import BlogList from '../(home)/_components/BlogList'
import Footer from '@/components/footerSection'

const blog = () => {
  return (
    <main className='container mx-auto px-4'>
        <JumboTron/>
        <BlogList/>
        <Footer/>
    </main>
  )
}

export default blog