import React from 'react'

export default function CurrentData( { img, date, location, condition, country, temp, wind, wd, humidity, press} ) {
    const imgUrl = img
    const newImageUrl = imgUrl.replace(new RegExp("64x64", 'g'), "128x128")
    return (
        <div className='flex flex-wrap gap-4 justify-center m-[20px]'>

            <div className='flex items-center gap-4 text-white bg-[#202b3b8f] rounded-xl p-[40px]'>
                <div>
                    <img src={`https:${newImageUrl}`} alt="" />
                </div>
                <div className='font-semibold'>
                    <p>{date}</p>
                    <h1 className='font-bold text-4xl'>{location}</h1>
                    <h1 className='font-bold text-6xl mt-[10px]'>{condition}</h1>
                    <p>Weather</p>
                </div>
            </div>
            <div className='text-white bg-[#202b3b8f] rounded-xl p-[40px] font-semibold'>
                <p>Country: {country}</p>

                <div className='flex flex-wrap gap-2 justify-left items-center md:block'>
                    <div className='flex items-center gap-2 mt-[20px]'>
                        <img className='w-[20px] md:w-auto' src="./assets/icons/Temperature.png" alt="" />
                        <p className='text-[#BFBEBE] text-[15px] md:text-[20px]'>Temp  {temp}C</p>
                    </div>
                    <div className='flex items-center gap-2 mt-[20px]'>
                        <img className='w-[20px] md:w-auto' src="./assets/icons/Wind.png" alt="" />
                        <p className='text-[#BFBEBE] text-[15px] md:text-[20px]'>Wind {wind}kph</p>
                    </div>
                    <div className='flex items-center gap-2 mt-[20px]'>
                        <img className='w-[20px] md:w-auto' src="./assets/icons/Wind Rose.png" alt="" />
                        <p className='text-[#BFBEBE] text-[15px] md:text-[20px]'>Wind direction  {wd}</p>
                    </div>
                    <div className='flex items-center gap-2 mt-[20px]'>
                        <img className='w-[20px] md:w-auto' src="./assets/icons/Humidity.png" alt="" />
                        <p className='text-[#BFBEBE] text-[15px] md:text-[20px]'>Humidity {humidity}</p>
                    </div>
                    <div className='flex items-center gap-2 mt-[20px]'>
                        <img className='w-[20px] md:w-auto' src="./assets/icons/Pressure.png" alt="" />
                        <p className='text-[#BFBEBE] text-[15px] md:text-[20px]'>Pressure {press}mb</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
