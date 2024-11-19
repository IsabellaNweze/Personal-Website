import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  return (
    <div className='bg-black text-white py-20 ' id='contact'> 
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <div className='flex-1'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Lets Talk </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eum recusandae labore placeat ullam quo magnam tempore a perspiciatis! Quas quo, id exercitationem aliquam ad eaque aliquid voluptates quia mollitia.</p>
           <div className='mb-4 mt-8'>
           <FontAwesomeIcon icon={faEnvelope} className="inline-block text-green-400 mr-2" />
        <a href="mailto:nwezeisabella@gmail.com" className="hover:underline">
          nwezeisabella@gmail.com
        </a>
      </div>
      <div className="mb-4">
        <FontAwesomeIcon icon={faPhone} className="inline-block text-green-400 mr-2" />
        <span>+2348145451569</span>
      </div>
      <div className="mb-4 mt-8">
        <FontAwesomeIcon icon={faMapMarkedAlt} className="inline-block text-green-400 mr-2" />
        <span>3b Jerry Iriabe Street, Lekki, Lagos, Nigeria</span>
      </div>
            </div>
            <div className='flex-1 w-full'>
            <form className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your name</label>
                <input type="text"  className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter your name'/>
              </div>
              <div>
                <label htmlFor="email" className='blobk mb-2'>Email</label>
                <input type="text"  className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter your email'/>
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea type="text"  className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400' rows="5" placeholder='Enter your message'/>
              </div>
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Send
              </button>
            </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact