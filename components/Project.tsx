import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../sanity'
import { Project as ProjectType } from '../typings'


type Props = {
  project: ProjectType,
  index: number,
  total: number
}

const Project = ({project, index, total}: Props) => {



  return (
    <div className='w-screen flex flex-col flex-shrink-0 snap-center space-y-5 md:space-y-10 
    items-center justify-center p-5 md:p-30 max-h-screen'>
      {project.linkToBuild
        ? <Link href={project.linkToBuild}>
            {project.image && 
            (<div className='relative h-56 w-80 sm:h-[300px] sm:w-[450px] mx-auto cursor-pointer'>
              <Image 
                className='relative'
                src={urlFor(project.image).url()}
                alt="profile image"
                fill={true}
                sizes="height: 14rem, width: 20rem, (min-width: 640px) width: 450px, (min-width: 640px) height: 300px"
              />
            </div>)
            }
          </Link> 
        : (
            <div className='relative h-56 w-80 sm:h-[300px] sm:w-[450px] mx-auto cursor-pointer'>
              {project.image && <Image 
                className='relative'
                src={urlFor(project.image).url()}
                alt="profile image"
                fill={true}
                sizes="height: 14rem, width: 20rem, (min-width: 640px) width: 450px, (min-width: 640px) height: 300px"
              />}
            </div>
          )}

      <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
        <h4 className='text-3xl md:4xl font-semibold text-center'>
          {/* <span className='underline decoration-mainColour-100/50 '>{index + 1} of {total}:</span> */}
          {project.title}
        </h4>
        
        <div className='flex items-center space-x-2 justify-center'>
          {project.technologies.map(tech => (
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

        <p className='text-base md:text-lg text-center md:text-left'>
          {project.summary}
        </p>
      </div>

    </div>
  )
}

export default Project