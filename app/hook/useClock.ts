import { weather } from '@/app/type'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useStatusStore from '../stores/useStatusStore'
import { useToast } from '@/components/ui/use-toast'
import { getWeatherIconURL, weatherFormatter } from '../utils/utils'

export const useClock = () => {
  const [time, setTime] = useState<Date | null>(null)
  const { timeStatus, setTimeStatus, setWeatherStatus } = useStatusStore()
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date(new Date().getTime() + (new Date().getTimezoneOffset() + 480) * 60 * 1000))
      if (!timeStatus) setTimeStatus(true)
    }, 1000)

    return () => clearInterval(interval)
  }, [timeStatus, setTimeStatus])

  const { toast } = useToast()
  const [weather, setWeather] = useState<weather | null>(null)
  const [weatherIcon, setWeatherIcon] = useState<string>('images/weather-animation-icon/not-available.svg')
  useEffect(() => {
    axios
      .get('https://restapi.amap.com/v3/ip?key=d392d64494354a502e6a166cc6c7e740')
      .then((res) =>
        axios
          .get(
            `https://restapi.amap.com/v3/weather/weatherInfo?key=d392d64494354a502e6a166cc6c7e740&city=${res.data.adcode}`
          )
          .then((res) => {
            setWeather(res.data.lives[0])
            const weatherName = weatherFormatter(res.data.lives[0].weather)
            setWeatherIcon(getWeatherIconURL(weatherName))
          })
      )
      .catch(() =>
        toast({
          variant: 'destructive',
          description: 'Something went wrong!'
        })
      )
      .finally(() => setWeatherStatus(true))
  }, [setWeatherStatus, toast])

  return { time, weather, weatherIcon }
}
