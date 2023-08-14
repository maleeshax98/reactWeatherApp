import React from 'react'
import HourlySingleCard from './HourlySingleCard'

export default function HourlyForecast({ location, data }) {
  return (
    <div>
      <h1 className='font-semibold text-white mt-[10px]'>Hourly forecast</h1>
      <div className='flex gap-4 flex-wrap justify-center mt-[10px]'>
        {/* <HourlySingleCard /> */}
        { data && data.map((e, index) => (
          <HourlySingleCard 
            key={index}
            time={e.time.split(" ")[1]}
            condition={e.condition.text}
            temp={e.temp_c}
            wind={e.wind_kph}
          />
        ))}
      </div>
    </div>
  )
}
