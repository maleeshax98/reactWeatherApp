import React from 'react'

export default function DaysForecastSingleCard({ date, img, condition, temp}) {
  const tempImg = img
  const finalImg = tempImg.replace(RegExp("64x64", 'g'), '128x128')
  return (
    <div className='fSingleCard text-[#949494] font-semibold bg-[#202b3baf] rounded-2xl p-[20px] text-center'>
      <p>{date}</p>
      <center>
        <img src={`https://${finalImg}`} alt="" />
      </center>
      <p className='text-[20px] text-white mt-[-10px]'>{condition}</p>
      <div className='flex gap-2 justify-center items-center mt-[10px]'>
        <img className='w-[19px]' src="./assets/icons/Temperature.png" alt="" />
        <p>{temp} C</p>
      </div>
    </div>
  )
}
