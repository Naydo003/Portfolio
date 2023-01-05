import React from 'react'
import { motion } from 'framer-motion'


type Props = {}

const ExperienceCard = (props: Props) => {

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img 
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{ once: true}}
        className='relative rounded-full h-32 w-32 xl:w-[200px] xl:h-[200px] mx-auto object-cover object-center'
        src='/images/lightshow.jpeg'
        alt='company logo image'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Position Title</h4>
        <p className='font-bold text-2xl mt-2'>COMPANY NAME</p>
        <div className='flex space-x-2 my-2'>
          <img className='h-10 w-10 rounded-full' src="/images/lightshow.jpeg" alt="company logo" />
          <img className='h-10 w-10 rounded-full' src="/images/lightshow.jpeg" alt="company logo" />
          <img className='h-10 w-10 rounded-full' src="/images/lightshow.jpeg" alt="company logo" />
          <img className='h-10 w-10 rounded-full' src="/images/lightshow.jpeg" alt="company logo" />

        </div>
        <p className='uppercase py-5 text-gray-300'>Started ...</p>
        <ul className='list-disk space-y-4 ml-5 text-lg'>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
          <li>Summary Point</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard