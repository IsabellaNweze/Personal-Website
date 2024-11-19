import React from 'react'
import HeroImage from '../assets/HeroImage.jpg'
const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="Hero Image"  className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Isabella Chinasa Nweze</span>
            ,Software Engineer

        </h1>
        <p className='mt-4 text-lg text-gray-300 '>
        I specialize in designing and building efficient, user-friendly applications, turning ideas into impactful digital solutions.
        </p>
        <div className='mt-8 space-x-4'>
    <button 
        className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' 
        onClick={() => window.open('http://www.linkedin.com/in/isabella-nweze', '_blank')}
    >
        Connect with me
    </button>
    <button 
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' 
        onClick={() => window.open('https://drive.google.com/file/d/1zQD8O8vcFvu4_Tf0crQbvcY4OBNJB2HJ/view?usp=sharing', '_blank')}
    >
        Resume
    </button>
</div>

    </div>
  )
}

export default Hero