import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import RelatedDoctors  from '../components/RelatedDoctors'


const Appointment = () => {

  const { docId } = useParams()

  const { doctors, currencySymbol } = useContext(AppContext)

  const [docInfo, setdocInfo] = useState(null)

  const [docSlot, setdocSlot] = useState([])

  const [slotIndex, setslotIndex] = useState(0)

  const [slotTime, setslotTime] = useState('')

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']


  const fetchDocInfo = () => {

    const docInfo = doctors.find(doc => doc._id === docId)

    setdocInfo(docInfo)
    // console.log(docInfo)

  }

  const getAvailableSlot = () => {
    setdocSlot([])

    let today = new Date()

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21, 0, 0, 0)


      if (today.getDate() === currentDate.getDate() > 30) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else {
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setdocSlot(prev => ([...prev, timeSlots]))

    }
  }

  useEffect(() => {
    fetchDocInfo()
  }, [docId, doctors])

  useEffect(() => {
    getAvailableSlot()
  }, [docInfo])

  useEffect(() => {
    console.log(docSlot)
  }, [docSlot])

  return docInfo && (
    <div className='my-8'>
      <div className='flex flex-col gap-2 md:gap-6 md:flex-row'>

        <div>
          <img
            src={docInfo.image}
            alt="An doctors image"
            className='w-full bg-[#5F6FFF] rounded-lg md:w-60'
          />
        </div>

        <div className='flex-1  border border-gray-500 rounded-lg p-8 py-7 bg-white mx-2  '>

          <h3 className='text-2xl flex gap-2 items-center'>{docInfo.name} <RiVerifiedBadgeFill /></h3>
          <div className='mt-1'>

            <span className='text-base  text-gray-500'>{docInfo.degree + " - " + docInfo.speciality}</span>
            <span className='mx-4 px-4 rounded-full py-0.5 border-gray-300 border text-sm '>{docInfo.experience}</span>
          </div>

          <div className='py-1'>
            <p>About :</p>
            <p className='text-sm text-gray-500'>{docInfo.about}</p>
          </div>

          <div>
            <h3 className='text-gray-500'>Appointment Fees : <span className='text-xl text-black'> {currencySymbol}{docInfo.fees} </span>  </h3>
          </div>

        </div>


      </div>

      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlot.length && docSlot.map((item, indx) => (

              <div key={indx} onClick={() => { setslotIndex(indx) }} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex == indx ? 'bg-[#5f6fff] text-white' : 'border brder-gray-200'}`}>
                <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>

            ))
          }
        </div>

        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlot.length && docSlot[slotIndex].map((item,indx) => (
              <p
              onClick={() => setslotTime(item.time)} 
               className={`text-sm font-light shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-[#5f6fff] text-white' : 'text-gray-400 border border-gray-500'}`} key={indx}>
                {item.time.toLowerCase()}
              </p>
          ))}
        </div>

        <button className='bg-[#5f6fff] text-white text-sm font-light px-14 py-3 rounded-full my-6 cursor-pointer'>Book an Appointment</button>

      </div>

      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

    </div>
  )
}

export default Appointment
