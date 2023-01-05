import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({}: Props) {

  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
      <motion.img 
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        viewport={{ once: true}}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        src='/images/kayaking.jpg'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
          Here is a {" "}
          <span className='underline decoration-[red]/50'>little</span>
          {" "}background
        </h4>
        <p className='text-base'>
          blah blah blah
          The biggest risk to our relationship came when we were back in Sheffield. We were spending some time with her little sisters and took them to a theme park. When it came time to leave they put on the water works and pleaded me to move to Sheffield instead. It was so hard to see them upset and for a moment I felt bad for taking Amber away. I promised them that we would call all the time and I would help them with their homework. We are trying to convince them to come over to Australia for the next Christmas but they seem unreasonably scared of our wildlife. Honestly they must teach Brits some garbage about Australia in schools. We have been calling her sisters regularly ever since getting back. Amber has seen about 5 types of spider already which seem screams and freaks out about then musters up the courage to go take a photo of it so that she can send to her sisters, further destroying any desire to come spend next Christmas with us.
        </p>
      </div>

    </div>
  )
}

export default About