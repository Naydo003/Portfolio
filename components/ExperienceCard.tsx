import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'


type Props = {
  experience: Experience
}

const ExperienceCard = ({experience}: Props) => {

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[100%] sm:w-[500px] md:w-[600px] xl:w-[900px] 
    snap-center bg-[#292929] p-5 md:p-10 md:mt-20 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div 
        initial={{
          y: -50,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1
        }}
        viewport={{ once: true}}
        className='relative h-32 w-32 xl:w-[200px] xl:h-[200px] mx-auto'>
        <Image 
          className='rounded-full object-cover object-center'
          src={urlFor(experience.companyImage).url()}
          alt="profile image"
          fill={true}
          sizes="(min-width: 1280px) width: 200px, (min-width: 1280px) height: 200px, height: 8rem, width: 8rem"
        />
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl md:text-4xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-xl md:text-2xl mt-2'>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies?.map(tech => (
            <div key={tech._id} className='relative h-10 w-10'>
            <Image 
              className='rounded-full'
              src={urlFor(tech.image).url()}
              alt="tech image"
              fill={true}
              sizes='height: 2.5rem, width: 2.5rem'
            />
          </div>
          ))}

        </div>
        <p className='uppercase pb-5 md:py-5 text-gray-300'>
          {new Date(experience.dateStarted).toDateString()} - {" "}
          {experience.isCurrentlyWorkingHere 
          ? "Present" 
          : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className='list-disc space-y-3 md:space-y-4 ml-5 text-lg'>
        {experience.points?.map((point, idx) => (
          <li className='text-sm' key={idx}>{point}</li>
        ))}

        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard