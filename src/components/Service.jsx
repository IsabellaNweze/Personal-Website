import React from 'react';
const services  = [
    {
    id:1,
    title: "Frontend Development",
    description: "Crafting responsive and visually appealing user interfaces with a focus on functionality and user experience",
    },
    {
        id:2,
        title: "Backend Development ",
        description: "Building scalable, efficient server-side applications and APIs to power seamless digital experiences",
        },

        {
            id:3,
            title: "Web Design",
            description: "Designing intuitive and engaging layouts that enhance usability and brand identity",
            },
        
            {
                id:4,
                title: "Research and Data Analysis",
                description: "Conducting in-depth research and deriving actionable insights from complex datasets",
                },
                {
                    id:5,
                    title: "Machine Learning and Data science",
                    description: "Developing intelligent systems and uncovering trends using data-driven algorithms and techniques",
                    },
                    {
                      id:6,
                      title: "Database Management",
                      description: "Designing, optimizing, and maintaining robust databases to ensure data integrity and accessibility",
                      },


]
const Service = () => {
  return (
    <div className='bg-black text-white py-20 ' id='services'> 
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Experience Areas</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {services.map(service => (
              <div key ={service.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                  
                  <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    {service.title}
                  </h3>
                  <p className='mt-2 text-gray-300'> { service.description}</p>
                  {/*
                  <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'> Read More</a>
                  */}
                </div>

              ))}
            </div>
    </div>
    </div>
  )
}

export default Service