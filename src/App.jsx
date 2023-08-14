import { useState } from 'react'
import './App.css'
import SearchBar from "./Components/SearchBar"
import Current from './Components/Current'
import HourlyForecast from './Components/HourlyForecast'
import DaysForecast from './Components/DaysForecast'
import useGetWeatherData from './hooks/useGetWeatherData'
function App() {

  const [ location, setLocation ] = useState("Colombo")
  const { getData, isPending, currentData, hourlyForcastData, dayForecast, error } = useGetWeatherData()
  getData(location)
  
  return (
    <div className={`App bg-[#0B131E] bg-cover bg-no-repeat ${ isDay ? "bg-[url('./day_bg.png')]" : "bg-[url('./night_bg.png')]" }  `}>
      <div className="weather-app">
        <SearchBar setLocation={setLocation} location={location}/>
        {isPending && <div className='text-center text-2xl font-semibold m-[40px] text-white'>Getting Data...</div>}
        {error && <div className='text-center text-2xl font-semibold m-[40px] text-white'>{error}</div>}
        <div style={ isPending ? {visibility: 'hidden'} : {}} >
          {!isPending && !error &&
          <>
            <Current location={location} data={currentData}/>
            <HourlyForecast  location={location} data={hourlyForcastData}/>
            <DaysForecast location={location} data={dayForecast}/>
          </>
          }
        </div>
      </div>
    </div>
  )

}

export default App
