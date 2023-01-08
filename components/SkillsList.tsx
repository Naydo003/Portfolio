import React from 'react'
import { motion, Variants } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings'

type Props = {
  skills: SkillType[]
}

const sectionVariants: Variants = {
  hidden: { },
  visible: { 
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.04
    }
  }
}

const skillVariants: Variants = {
  hidden: { y: 400, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
}

const MotionSkill = motion(Skill)

const SkillsList = ({skills}: Props) => {
  return (
    <div className='min-h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] 
      xl:px-10 justify-center xl:space-y-o mx-auto items-center'
    >
      <h3 className='section-title'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-2sm'>
        Hover over skill for current proficiency
      </h3>
      <motion.div 
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true }}
        className='grid grid-cols-4 gap-5 pt-20'>
        {skills.map((skill, idx) => (
          <MotionSkill key={skill._id} variants={skillVariants} skill={skill}
          viewport={{
            once: true
          }}/>
        ))}
        
      </motion.div>
    </div>
  )
}

export default SkillsList