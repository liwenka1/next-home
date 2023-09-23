import { weather } from '@/app/type'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useStatusStore from '../stores/useStatusStore'
import { utcToZonedTime } from 'date-fns-tz'

export const useClock = () => {
  const [time, setTime] = useState<Date>(utcToZonedTime(new Date(), 'Asia/Shanghai'))
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(utcToZonedTime(new Date(), 'Asia/Shanghai'))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const { setWeatherStatus } = useStatusStore()
  const [weather, setWeather] = useState<weather | null>(null)
  useEffect(() => {
    axios.get('/api/weather').then((res) => {
      setWeather(res.data.lives[0])
      setWeatherStatus(true)
    })
  }, [setWeatherStatus])

  return { time, weather }
}
