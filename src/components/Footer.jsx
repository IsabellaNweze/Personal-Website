import React from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub, faLinkedIn } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'> 
            <div className='flex-1 mb-4 md:mb-0'> 
            <h3 className='text-2xl font-bold mb-2'>Isabella</h3>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>

            </div>
            <div className='flex-1 w-full'>
                
                <form className='flex items-center justify-center' >
                    <input type="email" placeholder='Enter Email' className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-green-400'/>
                     <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'> Subscribe</button>
                </form>
            
</div>
       </div>
       <div>
        <p>
          &copy; {new Date().getFullYear()} Isabella. All rights reserved.
        </p>
        <div>
            <a href="#"> LinkedIn</a>
            <a href="#">Github</a>
        </div>
        <div>
            <a href="#"> Privacy</a>

        </div>
       </div>

       </div>

    </footer>
    
  )
}

export default Footer