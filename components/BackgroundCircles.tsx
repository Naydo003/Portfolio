import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function BackgroundCircles({}: Props) {

  return (
    <motion.div className='relative flex justify-center items-center'
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [0.1, 1.6, 1.6, 2.5, 1],
        opacity: [0.1, 0.2, 0.4, 0.0, 0.1, 1.0]
      }}
      transition={{
        duration: 2.5
      }}
    >
      <div className='absolute border border-[#333333] rounded-full w-[200px] h-[200px] mt-32 animate-ping' />
      {/* <div className='absolute border border-[#333333] rounded-full w-[300px] h-[300px] mt-32'/> */}
      <div className='absolute border border-[#333333] rounded-full w-[350px] h-[350px] md:w-[500px] md:h-[500px] mt-32'/>
      <div className='absolute border border-mainColour-100 rounded-full w-[500px] h-[500px] md:w-[650px] md:h-[650px] mt-32 animate-pulse'/>
      <div className='absolute border border-[#333333] rounded-full w-[650px] h-[650px] md:w-[800px] md:h-[800px] mt-32'/>
      
    </motion.div>

  )
}