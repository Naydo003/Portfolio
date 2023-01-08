import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import SkillsList from '../components/SkillsList'
import ProjectsList from '../components/ProjectsList'
import Contact from '../components/Contact'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
// import { fetchPageInfo } from '../utils/fetchPageInfo'
// import { fetchProjects } from '../utils/fetchProjects'
// import { fetchExperiences } from '../utils/fetchExperiences'
// import { fetchSkills } from '../utils/fetchSkills'
// import { fetchSocials } from '../utils/fetchSocials'

import { groq } from 'next-sanity'
import { sanityClient } from '../sanity'



const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home(props: Props) {


  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-mainColour-100/80'>
      <Head>
        <title>{props.pageInfo.name}&apos;s Portfolio</title>
      </Head>
  
      <Header socials={props.socials} />

      <section id='hero' className='sm:snap-start'>
        <Hero pageInfo={props.pageInfo} />
      </section>
      <section id='about' className='sm:snap-center'>
        <About pageInfo={props.pageInfo} />
      </section>
      <section id='experience' className='sm:snap-center'>
        <WorkExperience experiences={props.experiences} />
      </section>
      <section id='skills' className='sm:snap-start'>
        <SkillsList skills={props.skills} />
      </section>
      <section id='projects' className='sm:snap-start'>
        <ProjectsList projects={props.projects} />
      </section>
      <section id='contact' className='sm:snap-start'>
        <Contact info={props.pageInfo} />
      </section>


        <footer className='sticky bottom-5 w-full'>
          <div className='flex item-center justify-center '>
            <Link href='#hero' legacyBehavior>
              <p className='pt-1.5 h-10 w-40 text-center justify-center border border-mainColour-100 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'>Back to Top</p>
            </Link>
          </div>
        </footer>

    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {


  const pageInfo: PageInfo = await sanityClient.fetch(groq`*[_type == "pageInfo"][0]`)
  const socials: Social[] = await sanityClient.fetch(groq`*[_type == "social"]`)
  const skills: Skill[] = await sanityClient.fetch(groq`*[_type == "skill"]`)
  const experiences: Experience[] = await sanityClient.fetch(groq`*[_type == "experience"]`)
  const projects: Project[] = await sanityClient.fetch(groq`
  *[_type == "project"]{
    ...,
    technologies[]->
  }`)

// Need request to be to external api's only. Can't query our own api if it isn't built yet. Code inside of getStaticProps is never shown or run on the client side. Next hides it.

  // const pageInfo: PageInfo = await fetchPageInfo()
  // const projects: Project[] = await fetchProjects()
  // const experiences: Experience[] = await fetchExperiences()
  // const skills: Skill[] = await fetchSkills()
  // const socials: Social[] = await fetchSocials()

  return {
    props: {
      pageInfo,
      projects,
      experiences,
      skills,
      socials
    },
    revalidate: 10*60         // every 10 minute
  }

}