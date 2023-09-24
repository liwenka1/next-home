import { weather } from '@/app/type'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useStatusStore from '../stores/useStatusStore'
import { utcToZonedTime } from 'date-fns-tz'
import { useToast } from '@/components/ui/use-toast'
import { getWeatherIconURL, weatherFormatter } from '../utils/utils'

export const useClock = () => {
  const [time, setTime] = useState<Date>(utcToZonedTime(new Date(), 'Asia/Shanghai'))
  const { toast } = useToast()
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(utcToZonedTime(new Date(), 'Asia/Shanghai'))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const { setWeatherStatus } = useStatusStore()
  const [weather, setWeather] = useState<weather | null>(null)
  const [weatherIcon, setWeatherIcon] = useState<string>('images/weather-animation-icon/not-available.svg')
  useEffect(() => {
    axios
      .post('/api/weather', { adcode: '110000' })
      .then((res) => {
        setWeather(res.data.lives[0])
        const weatherName = weatherFormatter(res.data.lives[0].weather)
        setWeatherIcon(getWeatherIconURL(weatherName))
      })
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
