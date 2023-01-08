import React from 'react'
import Link from 'next/link'

import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import { Social } from '../typings'


type Props = {
  socials: Social[]
}

function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 flex items-start p-5 justify-between max-w-6xl mx-auto z-20 xl:items-center'> 
      <motion.div 
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          delay: 2,
          duration: 0.5
        }}
        className="flex flex-row items-center text-grey-300">
        {socials.map(social => (
          <SocialIcon 
            key={social._id}
            url={social.url}
            fgColor='grey'
            bgColor='transparent'
          />
        ))}
      </motion.div>

      <Link href='#contact' legacyBehavior>
        <motion.div 
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: 2,
            duration: 0.5
          }} 
          className="flex flex-row items-center text-grey-300 cursor-pointer"
        >
          <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='grey'
            bgColor='transparent'
          />
        
          <p className='uppercase hidden md:inline-flex text-sm text-grey-400'>Get In Touch</p>                 {/* This is hidden for small screens (mobile first) and then when hits the medium breakpoint will go to inline flex */}
        </motion.div>
      </Link>
    </header>
    
  )
}

export default Header