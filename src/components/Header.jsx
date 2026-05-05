import React, { useState } from 'react'
import logo from '../assets/images/assets_frontend/logo.svg'
import userProfileImg from '../assets/images/assets_frontend/profile_pic.png'
import close from '../assets/images/assets_frontend/cross_icon.png'
import dropdownicon from '../assets/images/assets_frontend/dropdown_icon.svg'
import menu from '../assets/images/assets_frontend/menu_icon.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const [showMenu, setshowMenu] = useState()
  const [token, settoken] = useState(true)

  return (
    <div className='flex item-center py-4 px-1 justify-between text-sm border-b border-gray-400'>
      <img
        src={logo}
        alt=""
        className='w-44 cursor-pointer'
        onClick={() => { navigate('/') }}
      />

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

      <div className='flex gap-6'>
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
              onClick={() => navigate('/register')}
              className='bg-[#5F6FFF] text-white px-8 py-2 rounded-full font-light hidden md:block'
            >
              Create Account
            </button>
        }

        <img
          onClick={() => setshowMenu(true)}
          className='w-6 md:hidden'
          src={menu}
          alt="An menu icon" />

        {/* mobile menu  */}

        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'}  md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-150`}>
          <div className='flex justify-between items-center px-5 py-6'>
            <img className='w-36' src={logo} alt="" />
            <img className='w-7' onClick={(() => setshowMenu(false))} src={close} alt="" />
          </div>
          <ul className='flex flex-col items-center mt-5 gap-2 px-5 text-lg font-medium'>
            <NavLink onClick={() => { setshowMenu(false) }} className='px-4 py-2 rounded inline-block' to={'/'}> <p className='px-4 py-2 rounded inline-block'>Home</p> </NavLink>
            <NavLink onClick={() => { setshowMenu(false) }} className='px-4 py-2 rounded inline-block' to={'/doctors'}><p className='px-4 py-2 rounded inline-block'>All Doctors</p></NavLink>
            <NavLink onClick={() => { setshowMenu(false) }} className='px-4 py-2 rounded inline-block' to={'/about'}><p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
            <NavLink onClick={() => { setshowMenu(false) }} className='px-4 py-2 rounded inline-block' to={'/contact'}><p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Header

