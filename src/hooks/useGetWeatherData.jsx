import React, { useEffect, useState } from 'react'

export default function useGetWeatherData() {
    // http://api.weatherapi.com/v1/forecast.json?key=368de7a8e67b4d77ab1122603230808&q=kuliyapitiya&days=7&aqi=no&alerts=yes
    const [ isPending, setIsPending ] = useState(true)
    const [ currentData, setCurrentData ] = useState(null)
    const [ hourlyForcastData, setHourlyForcastData ] = useState(null)
    const [ dayForecast, setDayForecast ] = useState(null)
    const [ error, setError ] = useState(null)

    const getData = (location) => {
        useEffect(() => {
            const callApi = async () => {

                setIsPending(true)
                setError(null)

                try {const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=368de7a8e67b4d77ab1122603230808&q=${location}&days=8&aqi=no&alerts=yes`)
                const json = await response.json()
                
                if(json.error) {
                    setError(json.error.message)
                    setIsPending(false)
                    return
                }else {
                    let currentData = {
                        country: json.location.country,
                        date: json.current.last_updated,
                        condition: json.current.condition.text,
                        img: json.current.condition.icon,
                        temp: json.current.temp_c,
                        wind: json.current.wind_kph,
                        windDr: json.current.wind_dir,
                        humidity: json.current.humidity,
                        press: json.current.pressure_mb
                    }

                    setCurrentData(currentData)
                    
                    // Getting hourly forecast data
                    let hourlyForcastData = []
                    let allHoursData = json.forecast.forecastday[0].hour
                    allHoursData.map((e, index) => {
                        if(index === 0 || index === 6 || index === 12 || index === 18 || index === 23){
                            hourlyForcastData.push(e)
                        }
                    })
                    setHourlyForcastData(hourlyForcastData)
                    
                    // 7day forecast data
                    let allDayForecast = json.forecast.forecastday
                    allDayForecast.shift()
                    setDayForecast(allDayForecast) 
                    setIsPending(false)
                 }

            } catch{
                setError("Somthing went wrong")
                setIsPending(false)

            }



            }
            callApi()
        }, [location])
    }
//    console.log(hourlyForcastData)
   return { getData, isPending, currentData, hourlyForcastData, dayForecast, error }
}
