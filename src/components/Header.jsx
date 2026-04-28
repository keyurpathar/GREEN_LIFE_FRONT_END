import React, { useState } from 'react'
import logo from '../assets/images/assets_frontend/logo.svg'
import userProfileImg from '../assets/images/assets_frontend/profile_pic.png'
import dropdownicon from '../assets/images/assets_frontend/dropdown_icon.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const [setshowMenu, setSetshowMenu] = useState()
  const [token, settoken] = useState(true)

  return (
    <div className='flex item-center py-4 justify-between text-sm border-b border-gray-400'>
      <img
        src={logo}
        alt=""
        className='w-44 cursor-pointer' />

      <ul className='hidden md:flex md:gap-6 font-medium'>

        <NavLink to={'/'}>
          <li className='py-1'>Home</li>
          <hr className='border-0 outline-0 bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to={'/doctors'}>
          <li className='py-1'>All Doctors</li>
          <hr className='border-0 outline-0 bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to={'/contact'}>
          <li className='py-1'>Contact Us</li>
          <hr className='border-0 outline-0 bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to={'/about'}>
          <li className='py-1'>About Us</li>
          <hr className='border-0 outline-0 bg-[#5F6FFF] h-0.5 w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div>
        {
          token ?

            <div className='flex  gap-2 item-center cursor-pointer group relative'>

              <img
                src={userProfileImg}
                alt=""
                className='rounded-full w-8'
              />
              <img src={dropdownicon} className='w-2.5' alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 hidden z-20 group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded-lg flex flex-col gap-4 p-3'>
                  <p className='hover:cursor-pointer hover:text-black' onClick={() => navigate('/myprofile')}>My Profile</p>
                  <p className='hover:cursor-pointer hover:text-black' onClick={() => navigate('/myappointments')}>My Appointments</p>
                  <p className='hover:cursor-pointer hover:text-black' onClick={() => settoken(false)}>Logout</p>
                </div>
              </div>


            </div>
            :
            <button
              onClick={() => navigate('/login')}
              className='bg-[#5F6FFF] text-white px-8 py-2 rounded-full font-light hidden md:block'
            >
              Create Account
            </button>
        }

      </div>

    </div>
  )
}

export default Header

