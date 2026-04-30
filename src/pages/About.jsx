import React from 'react'
import img from '../assets/images/assets_frontend/about_image.png'

const About = () => {
  return (
    <div className='my-8 px-2 lg:px-10'>

      <div>
        <p className='text-center uppercase my-4 text-gray-500 text-2xl'>about us</p>

        <div className='flex flex-col gap-4 lg:flex-row md:gap-8'>

          <img 
          src={img} 
          alt="An about image" 
          className='rounded-lg w-full lg:w-1/3'
          />

          <div className='flex flex-col gap-3 lg:gap-8 xl:gap-10 xl:mt-8 text-gray-500 text-sm'>

            <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>

            <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>

            <p>

              <h3 className='text-gray-800 text-lg'>Our Vision : </h3>

              Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default About
