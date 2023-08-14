import React from 'react'
import "./HourlyDataCard.css"
export default function HourlyDataCard( { time, condition, temp, wind, isDay } ) {
  const fullTime = time
  const timeOnly = fullTime.split(" ")
  return (
    <div>
        <div className="card rounded-2xl bg-[#202b3bb6] text-white font-semibold p-[15px]">
          <p className='text-[#BFBEBE]'>{timeOnly[1]} { timeOnly[1] !== "00:00" && timeOnly[1] !== "06:00" ? isDay === 1 ? "A.M" : "P.M" : "A.M"}</p>
          <p className='text-[20px]'>{condition}</p>
          <div className='flex gap-2 mt-[10px]'>
            <img className='w-[19px]' src="./assets/icons/Temperature.png" alt="" />
            <p className='text-[15px] text-[#BFBEBE]'>{temp}C</p>
          </div>
          <div className='flex gap-2 mt-[10px]'>
            <img className='w-[19px]' src="./assets/icons/Wind.png" alt="" />
            <p className='text-[15px] text-[#BFBEBE]'> {wind}kph</p>
          </div>
        </div>
    </div>
  )
}
