import React, { useState } from 'react'
import img from '../assets/images/assets_frontend/profile_pic.png'

const MyProfile = () => {

  const [userData, setUserData] = useState({

    name: "Keyur",
    image: img,
    email: "keyur@gmail.com",
    phone: "+91 90813 94875",
    address: {
      lin1: "804 megh-malhar",
      lin2: "Vraj chowk , Nana varachha Surat"
    },
    gender: "Male",
    dob: "29-08-2005"

  })

  const [isEdit, setisEdit] = useState(true)

  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm my-10 '>

      <div>

        <img src={userData.image} alt="An user image" className='w-36 rounded' />

        {
          isEdit ?
            <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4'
                   onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                   type="text"
                   value={userData.name} /> :
            <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
        }

        <hr className='bg-zinc-400 h-px border-none' />

        <div>
          <p className='uppercase text-neutral-500 underline mt-3'>contact information</p>

          <div className='grid grid-col-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Email id: </p>
            <p className='text-blue-500'>{userData.email}</p>
            <p className='font-medium'>Phone : </p>
            {
              isEdit ?
                <input
                      className='bg-gray-100 max-w-52' 
                      onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} 
                      type="text" 
                      value={userData.phone} /> :
                <p className='text-blue-500'>{userData.phone}</p>
            }
            <p className='font-medium'>Address : </p>
            {
              isEdit ?
                <p>
                  <input 
                  className='bg-gray-50'
                  onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, lin1: e.target.value } }))} 
                  value={userData.address.lin1} 
                  type="text" />
                  <br />
                  <input 
                  className='bg-gray-50'
                  onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, lin2: e.target.value } }))} 
                  value={userData.address.lin2} 
                  type="text" />
                </p> :
                <p className='text-gray-500'>
                  {userData.address.lin1}
                  <br />
                  {userData.address.lin2}
                </p>
            }

          </div>

        </div>

        <div>
          <p className='uppercase text-neutral-500 underline mt-3'>Basic Information</p>
          <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>gender : </p>
            {
              isEdit ?
                <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                  <option name value="male">male</option>
                  <option value="female">female</option>
                </select> :
                <p className='text-gray-100'>{userData.gender}</p>
            }
            <p className='font-medium'>BirthDay</p>
            {
              isEdit ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} /> : <p className='text-gray-400'>{userData.dob}</p>
            }
          </div>
        </div>

      </div>

      <div className='mt-10 '>
        {
          isEdit ? <button className='border border-blue-500 px-8 py-2 rounded-full  capitalize hover:bg-blue-600 transition-all duration-200 hover:text-white  ' onClick={() => { setisEdit(false) }}>save information</button> : <button className='border border-blue-500 px-8 py-2 hover:bg-blue-600 transition-all duration-200 hover:text-white rounded-full capitalize'   onClick={() => { setisEdit(true) }}>edit</button>
        }
      </div>

    </div>
  )
}

export default MyProfile
