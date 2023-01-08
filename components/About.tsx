import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo
}

function About({pageInfo}: Props) {

  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-20 justify-evenly mx-auto items-center'>
      <h3 className='section-title'>About</h3>

      <motion.div 
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
        className='relative -mb-28 md:mb-0 flex-shrink-0 w-56 h-56 md:max-h-[50%] md:max-w-[40%] md:w-72 md:h-96 xl:w-[500px] xl:h-[600px]'>
        <Image 
          className='rounded-full object-cover md:rounded-lg'
          src={urlFor(pageInfo?.profilePic).url()}
          alt="profile image"
          fill={true}
          sizes="height: 8rem, width: 8rem"
        />
      </motion.div>
      <div className='space-y-5 md:space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold hidden xl:block'>Background</h4>
        <p className='text-base'>{pageInfo?.backgroundInformation}</p>
      </div>

    </div>
  )
}

export default About