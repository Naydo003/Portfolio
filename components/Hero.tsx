import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
import { motion } from 'framer-motion'

type Props = {
  pageInfo: PageInfo
}

function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "",
      "",
      "Hello",
      `My Name is ${pageInfo?.name}`,
      "Welcome to my portfolio"
    ],
    loop: true,
    delaySpeed: 2000
  })



  return (
    <div className='h-screen flex flex-col  items-center justify-center text-center'>

      <BackgroundCircles />
      <div className='relative h-32 w-32 mx-auto justify-center'>
      <Image 
        priority
        className='rounded-full h-32 w-32 mx-auto object-cover'
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile image"
        fill={true}
        sizes="height: 8rem, width: 8rem"
      />
      </div>

      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 2.5,
          duration: 0.5
        }}
        className='space-y-8 mt-10 z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] mr-[-15px]' >{pageInfo?.role}</h2>
        <h1 className='text-xl sm:text-4xl lg:text-5xl font-semibold px-10' >
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='white' />
        </h1>
        <div className=''>
          <Link href='#about'>
            <button className='hero-button'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='hero-button'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='hero-button'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='hero-button'>Projects</button>
          </Link>

        </div>
      </motion.div>

    </div>
  )
}

export default Hero