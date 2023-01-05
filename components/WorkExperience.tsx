import React from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-width-full px-10 justify-evenly mx-auto item-center'
      initial={{
        opacity: 0
      }}
      transition={{ duration: 1.5 }}
      whileInView={{
        opacity: 1
      }}
      viewport={{ once: true}}
    >

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-[#f5a73a]/80'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default WorkExperience