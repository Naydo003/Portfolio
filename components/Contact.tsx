import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = data => {
    window.location.href = `mailto:natphil123@gmail.com?subject=${data.subject}&body=Message... ${data.message} from ${data.name}`
  };

  return (
    <div className='h-screen relative flex flex-col overflow-hidden text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I can help with your project. {" "}
          <span className='underline decoration-[#f5a73a]/50 '>Lets Talk!</span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f5a73a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>+61412344432</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f5a73a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>nath123@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f5a73a] h-7 w-7 animate-pulse'/>
            <p className='text-2xl'>23 col ave, Melbourne 4221</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} className='contact-input' type="text" placeholder='Name'/>
            <input {...register('email')} className='contact-input' type="email" placeholder='Email'/>
          </div>
          <input {...register('subject')} className='contact-input' type="text" placeholder='Subject'/>
          <textarea {...register('message')} className='contact-input' placeholder='message...'></textarea>
          <button type='submit' className='bg-[#f5a73a] py-5 px-18 rounded-sm text-black font-bold text-lg'>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default Contact

