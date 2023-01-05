import React from 'react'

type Props = {}

const ProjectsList = (props: Props) => {
  const projects = [1, 2, 3, 4]
  return (
    <div className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-[#f5a73a]/80'>
        {projects.map((project, index)=>(
            <div className='w-screen flex flex-col flex-shrink-0 snap-center space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
              <img src="/images/lightshow.jpeg" alt="" />
              <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#f5a73a]/50 '>Case Study {index + 1} of {projects.length}:</span> MERN App
                </h4>
                <p className='text-lg text-center md:text-left'>
                biggest risk to our relationship came when we were back in Sheffield. We were spending some time with her little sisters and took them to a theme park. When it came time to leave they put on the water works and pleaded me to move to Sheffield instead. It was so hard to see them upset and for a moment I felt bad for taking Amber away. I promised them that we would call all the time and I would help them with their homework. We are trying to convince them to come over to Australia for the 
                </p>
              </div>

            </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#f5a73a]/20 left-0 h-[500px] -skew-y-12'>

      </div>
    </div>
  )
}

export default ProjectsList