import React, { forwardRef, Ref } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';


type Props = {
  skill: SkillType
}

const Skill = forwardRef(({skill}: Props, ref: Ref<HTMLDivElement>) => {



  return (
    <motion.div 
    ref={ref}
    className='group relative flex cursor-pointer'>
      <div className='relative object-cover w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 2xl:w-32 2xl:h-32 
      filter group-hover:grayscale transition duration-300 ease-in-out'>
      <Image 
        className='relative rounded-full object-cover border border-gray-500'
        src={urlFor(skill.image).url()}
        alt="profile image"
        fill={true}
        sizes="(min-width: 768px) width: 7rem, (min-width: 768px) height: 7rem, height: 4rem, width: 4rem"
      />
      </div>

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 2xl:w-32 2xl:h-32  rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-1xl text-black font-bold opacity-100'>{skill.progress}</p>
        </div>
      </div>
    
    </motion.div>
  )
})

Skill.displayName = 'Skill'

export default Skill