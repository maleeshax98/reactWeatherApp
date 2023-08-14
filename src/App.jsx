import { useEffect, useState } from 'react'
import './App.css'
import CurrentData from './Components/CurrentData'
import HourlyDataCard from './Components/HourlyDataCard'
import DailyDataCard from './Components/DailyDataCard'

function App() {
  const [ location, setLocation ] = useState("Colombo")
  const [ tempLocation, setTempLocation ] = useState(null)
  const [ pending, setPending ] = useState(true)
  const [ cData, setCData ] = useState([])
  const [ hFData, setHFData ] = useState([])
  const [ dFData, setDFData ] = useState([])
  const [ country, setCountry ] = useState("Sri Lanka")
  const [ time, setTime ] = useState(1)
  const [ error, setError ] = useState(null)
  const handleChange = (e) => {

    e.preventDefault()
    setError(null)
    setLocation(tempLocation)
  }

  useEffect(() => {
    
    const getData = async () => {
      setError(null)

      try {let hfarray = []
          let finalHfArray = []

          setPending(true)
          const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=368de7a8e67b4d77ab1122603230808&q=${location}&days=8&aqi=no&alerts=yes`)
          const json = await response.json()
          
          setCData(json.current)

          try{
            setTime(0)
          } catch{
            setTime(1)
          }
          // Hourly forecast
          hfarray = json.forecast.forecastday[0].hour
          hfarray.map((d, index) => {
            if( index === 0 || index === 6 || index === 12 || index === 18 || index === 23) {
              finalHfArray.push(d)
            }
          })
          setHFData(finalHfArray)
          setCountry(json.location.country)

          // 7days forecast
          let forcastArray = []
          forcastArray = json.forecast.forecastday
          forcastArray.shift()
          setDFData(forcastArray)

          setPending(false)} catch(err) {
            setError("Somthing went wrong. Please try again")
          }
    }

    getData()
  }, [location])

  return (
    <div className={`app bg-[#0B131E] h-[100%] bg-cover bg-no-repeat ${ time === 1 ? "bg-[url('./assets/day_bg.png')]" : "bg-[url('./assets/night_bg.png')]"} `}>
    {error && <div className='text-center mt-auto text-4xl text-white font-bold'>{error}</div>}
    {!error && (
        <div className="weather-app">
          <form onSubmit={handleChange}>
            <input type="text" onChange={ (e) => {setTempLocation(e.target.value)}} placeholder="Search For Cities" className="bg-[#202B3B] p-[15px] rounded-md text-white font-semibold outline-none w-[100%]" />
          </form>
          {!pending && 
          (<CurrentData 
            
            img={cData.condition.icon}
            date={cData.last_updated}
            location={location}
            condition={cData.condition.text}
            country={country}
            temp={cData.temp_c}
            wind={cData.wind_kph}
            wd={cData.wind_dir}
            humidity={cData.humidity}
            press={cData.pressure_mb}
          />)}

        {!pending && (<h1 className='font-semibold text-white'>Hourly forecast</h1>) }
        <br />
        <div className='flex flex-wrap gap-4 justify-center items-center'>
          {!pending && hFData.map((e, index) => (
            <HourlyDataCard
            key={index}
            time={e.time}
            condition={e.condition.text}
            temp={e.temp_c}
            wind={e.wind_kph}
            isDay={e.isDay}
            />
          ))}
        </div>
        <br />
          
          {!pending && (<h1 className='font-semibold text-white'>7 Day forecast</h1>) }
        <br />
        <div className='flex flex-wrap gap-4 justify-center items-center'>
          {!pending && 
          dFData.map((e, index) => (
            <DailyDataCard
            key={index}
            date={e.date}
            img={e.day.condition.icon}
            condition={e.day.condition.text}
            temp={e.day.daily_chance_of_rain}
            />
          ))
          }
        </div>

      </div>)}

    </div>
  )

}

export default App
