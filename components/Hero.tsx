import React from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello",
      "My Name is Nathan",
      "Welcome to my portfolio"
    ],
    loop: true,
    delaySpeed: 2000
  })



  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='/images/profile.jpeg'
        alt='profile image'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]' >Web Developer</h2>
        <h1 className='text-4xl lg:text-5xl font-semibold px-10' >
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='red'/>
        </h1>
        <div className='pt-5'>
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
      </div>

    </div>
  )
}

export default Hero