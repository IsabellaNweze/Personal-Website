import React from 'react';
const services  = [
    {
    id:1,
    title: "Frontend Development",
    description: "Course that blah blah",
    },
    {
        id:2,
        title: "Backend Development ",
        description: "Course that blah blah",
        },

        {
            id:3,
            title: "Web Design",
            description: "Course that blah blah",
            },
        
            {
                id:4,
                title: "Research and Data Analysis",
                description: "Course that blah blah",
                },
                {
                    id:5,
                    title: "Machine Learning and Data science",
                    description: "Course that blah blah",
                    },
                    {
                      id:6,
                      title: "Database Management",
                      description: "Course that blah blah",
                      },


]
const Service = () => {
  return (
    <div className='bg-black text-white py-20 ' id='about'> 
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Experience Areas</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {services.map(service => (
              <div key ={service.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                  
                  <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    {service.title}
                  </h3>
                  <p className='mt-2 text-gray-300'> { service.description}</p>
                  <a href="#" className='mt-4 inline-block text-green-400 hover:text-blue-500'> Read More</a>
                </div>

              ))}
            </div>
    </div>
    </div>
  )
}

export default Service