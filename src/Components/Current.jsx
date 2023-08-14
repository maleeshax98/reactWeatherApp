import React from 'react'

export default function Current({ location, data }) {
  const tempImg = data.img
  const finalImg = tempImg.replace(RegExp("64x64", 'g'), '128x128')
  return (
    <div className='flex justify-center flex-wrap gap-4 m-[20px]'>
      {/* Main details */}
      <div className='flex p-[40px] gap-4 items-center bg-[#202b3bc0] rounded-xl text-white font-semibold'>
        <div>
          <img src={`https:${finalImg}`} alt="" />
        </div>
        <div>
          <p>{data.date}</p>
          <h1 className='text-5xl font-bold'>{location}</h1>

          <h1 className='text-7xl font-bold mt-[20px]'>{data.condition}</h1>
          <p>Weather</p>
        </div>
      </div>

      {/* More details */}
      <div className='p-[40px] bg-[#202b3bc0] rounded-xl text-white font-semibold'>
        <p>{data.country}</p>
        <div className='flex flex-wrap gap-2 items-center md:block'>
          <div className='flex items-center gap-2 font-semibold mt-[20px]'>
            <img className='w-[20px] md:w-auto' src="./assets/icons/Temperature.png" alt="" />
            <p className='text-[#BFBEBE] text-[15px] md:text-[20px]'>Temp  {data.temp}C</p>
          </div>
          <div className='flex items-center gap-2 font-semibold mt-[20px]'>
            <img className='w-[20px] md:w-auto' src="./assets/icons/Wind.png" alt="" />
            <p className='text-[#BFBEBE] text-[15px] md:text-[20px]'>Wind {data.wind}kph</p>
          </div>
          <div className='flex items-center gap-2 font-semibold mt-[20px]'>
            <img className='w-[20px] md:w-auto' src="./assets/icons/Wind Rose.png" alt="" />
            <p className='text-[#BFBEBE] text-[15px] md:text-[20px]'>Wind direction  {data.windDr}</p>
          </div>
          <div className='flex items-center gap-2 font-semibold mt-[20px]'>
            <img className='w-[20px] md:w-auto' src="./assets/icons/Humidity.png" alt="" />
            <p className='text-[#BFBEBE] text-[15px] md:text-[20px]'>Humidity {data.humidity}</p>
          </div>
          <div className='flex items-center gap-2 font-semibold mt-[20px]'>
            <img className='w-[20px] md:w-auto' src="./assets/icons/Pressure.png" alt="" />
            <p className='text-[#BFBEBE] text-[15px] md:text-[20px]'>Pressure {data.press}mb</p>
          </div>
        </div>
      </div>
    </div>
  )
}
