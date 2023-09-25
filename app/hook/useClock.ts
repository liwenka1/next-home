import { weather } from '@/app/type'
import axios from 'axios'
import { useEffect, useState } from 'react'
import useStatusStore from '../stores/useStatusStore'
import { useToast } from '@/components/ui/use-toast'
import { getWeatherIconURL, weatherFormatter } from '../utils/utils'

export const useClock = () => {
  const [time, setTime] = useState<Date>(
    new Date(new Date().getTime() + (new Date().getTimezoneOffset() + 480) * 60 * 1000)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date(new Date().getTime() + (new Date().getTimezoneOffset() + 480) * 60 * 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [time])

  const { toast } = useToast()
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
