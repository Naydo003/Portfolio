import React from 'react'
import { Project as ProjectType } from '../typings'
import Project from './Project'

type Props = {
  projects: ProjectType[]
}

const ProjectsList = ({projects}: Props) => {
  
  return (
    <div className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='section-title'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x 
      snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-mainColour-100/80'>
        {projects.map((project, index)=>{

          return <Project key={project._id} project={project} index={index} total={projects.length} />
        })}
      </div>
      {/* The following is the background stripe */}
      <div className='w-full absolute top-[30%] bg-mainColour-100/20 left-0 h-[500px] -skew-y-12'>
      </div>
    </div>
  )
}

export default ProjectsList