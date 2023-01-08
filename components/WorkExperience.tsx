import React from 'react'
import ExperienceCard from './ExperienceCard'
import { motion } from 'framer-motion'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

function WorkExperience({experiences}: Props) {
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

      <h3 className='section-title'>
        Experience
      </h3>
      <div className='w-full flex space-x-5 overflow-x-scroll p-5 md:p-10 snap-x snap-mandatory scrollbar-thin 
      scrollbar-track-gray-400/40 scrollbar-thumb-mainColour-100/80'>
        {experiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience