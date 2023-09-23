import { weather } from '@/app/type'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useStatusStore from '../stores/useStatusStore'

export const useClock = () => {
  const [time, setTime] = useState<Date>(new Date())
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const { setWeatherStatus } = useStatusStore()
  const [weather, setWeather] = useState<weather | null>(null)
  useEffect(() => {
    axios
      .get('https://restapi.amap.com/v3/weather/weatherInfo?key=d392d64494354a502e6a166cc6c7e740&city=110000')
      .then((res) => {
        setWeather(res.data.lives[0])
        setWeatherStatus(true)
      })
  }, [setWeatherStatus])

  return { time, weather }
}
