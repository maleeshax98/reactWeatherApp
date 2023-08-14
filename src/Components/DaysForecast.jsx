import React from 'react'
import DaysForecastSingleCard from './DaysForecastSingleCard'

export default function DaysForecast({ location, data }) {
  return (
    <div>
        <h1 className='font-semibold text-white mt-[10px] '>7 Days forecast</h1>
        <div className='flex gap-4 flex-wrap justify-center mt-[20px]'>
            {
              data && (
                data.map((e, index) => (
                  <DaysForecastSingleCard 
                  key={index}
                  date={e.date}
                  img={e.day.condition.icon}
                  condition={e.day.condition.text}
                  temp={e.day.maxtemp_c}
                  />
                ))
              )
            }
        </div>
    </div>
  )
}
