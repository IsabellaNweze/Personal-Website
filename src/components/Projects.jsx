import React from 'react'
import rosterImage from '../assets/schedule.png'
import clock from '../assets/clock.png'
import cloxk from '../assets/cloxk.png'
import research from '../assets/research.png'

const projects =[
    {
        id:1,
        name:"Hybrid Roster Scheduling algorithm",
        technologies:"Java and MySQL database",
        image : cloxk,
        github:"https://github.com/IsabellaNweze/ActivEdge-Roster"
    },
    {
        id:2,
        name:"Time management web application",
        technologies:"React JS and Tailwind",
        image : clock,
        github:"https://github.com/IsabellaNweze/HH-FinalProject"
    },
    {
        id:3,
        name:"  Research Paper ",
        technologies:"Google scholar, Questionnaires",
        image : research,
        github:"https://docs.google.com/document/d/16C2d5mDS3NUgyfGE1s8JlCH24V8dW9BMq_nxZozVvCo/edit?usp=sharing"
    },
    {
        id:4,
        name:"Shopping Website",
        technologies:"HTNL and CSS",
        image : rosterImage,
        github:"https://github.com/IsabellaNweze/Isabella-s-website"
    },
    {
        id:5,
        name:"Dashboard ",
        technologies:"React JS",
        image : clock,
        github:"https://github.com/IsabellaNweze/FirstReactProject"
    },
    {
        id:6,
        name:"Connect 4 game",
        technologies:"Python",
        image : clock,
        github:"https://github.com/TimiDaminov/DIP392-Softwarangers"
    },
    


]

const Projects = () => {
  return (
  <div className='bg-black text-white py-20 ' id='projects'> 
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map(project =>(
                <div key ={project.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                    <img src={project.image} alt="project image" className='rounded-lg mb-4 w-full h-48 object-cover' />
                    <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'> { project.name}</h3>
                    <p className='text-gray-400 mb-4'>{project.technologies}</p>
                    <a href={project.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'> Github</a>
                    </div>
            ))}

</div>
</div>
</div>
  )
}

export default Projects