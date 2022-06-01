import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' name='contact'>
      <form method='POST' action="https://getform.io/f/528cddc1-9afb-4d57-a988-28bfaf02290d" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-[#8892b0] text-gray-300'>Contact</p>
          
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message"  cols="30" rows="10" placeholder='Enter Your Message'></textarea>

        <button className='text-white border-2 hover:bg-[#8892b0] border-[#8892b0] px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>

      </form>
    </div>
  )
}

export default Contact