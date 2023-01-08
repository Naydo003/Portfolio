import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { PageInfo } from '../typings'

type Props = {
  info: PageInfo
}

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = ({info}: Props) => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => {
    window.location.href = `mailto:${info.email}?subject=${data.subject}&body=Message... ${data.message} from ${data.name}`
  };

  return (
    <div className='h-screen relative flex flex-col overflow-hidden text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='section-title'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-2xl md:text-4xl font-semibold text-center'>
          I can help with your project. {" "}
          <br className='md:hidden' />
          <span className='underline decoration-mainColour-100/50 '>Lets Talk!</span>
        </h4>
        <div className='space-y-5 md:space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-mainColour-100 h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>{info.phoneNumber}</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-mainColour-100 h-7 w-7 animate-pulse'/>
            <p className='text-xl md:text-2xl'>{info.email}</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-mainColour-100 h-7 w-7 animate-pulse'/>
            <p className='text-xl md:text-2xl'>{info.address}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-[95%] sm:w-fit mx-auto'>
          <div className='flex sm:w-fit space-x-2'>
            <input {...register('name')} className='contact-input w-[50%] sm:w-fit' type="text" placeholder='Name'/>
            <input {...register('email')} className='contact-input w-[50%] sm:w-fit' type="email" placeholder='Email'/>
          </div>
          <input {...register('subject')} className='contact-input' type="text" placeholder='Subject'/>
          <textarea {...register('message')} className='contact-input' placeholder='message...'></textarea>
          <button type='submit' className='bg-mainColour-100 py-5 px-18 rounded-sm text-black font-bold text-lg'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Contact

