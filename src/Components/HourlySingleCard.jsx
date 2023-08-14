import React from 'react'

export default function HourlySingleCard({ time, condition, temp, wind}) {
  return (
    <div className='hourlyForecast text-[#949494] font-semibold bg-[#202B3B] rounded-2xl p-[20px]'>
      <p>{time}</p>
      <p className='text-[20px] text-white'>{condition}</p>
      <div className='flex gap-2 items-center mt-[10px]'>
        <img className='w-[19px]' src="./assets/icons/Temperature.png" alt="" />
        <p>{temp} C</p>
      </div>
      <div className='flex gap-2 items-center  mt-[10px]'>
        <img className='w-[19px]' src="./assets/icons/Wind.png" alt="" />
        <p>{wind} kph</p>
      </div>
    </div>
  )
}
