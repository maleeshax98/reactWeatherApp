import React from 'react'
import "./DailyDataCard.css"
export default function DailyDataCard({ date, img, condition, temp}) {
    const imgUrl = img
    const newImageUrl = imgUrl.replace(new RegExp("64x64", 'g'), "128x128")
    return (
        <div className='dailyCard p-[20px] text-center font-semibold text-white bg-[#202B3B] rounded-lg'>
        <p>{date}</p>
        <center>
        <img src={`https:${newImageUrl}`} alt="" />
        </center>
        <p className='text-[20px]'>{condition}</p>
            <div className='flex gap-2 justify-center mt-[10px]'>
                    <img className='w-[19px]' src="./assets/icons/Temperature.png" alt="" />
                    <p className='text-[15px] text-[#BFBEBE]'>Chance of rain {temp}</p>
            </div>
        </div>
    )
}
