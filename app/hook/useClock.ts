import { weather } from '@/app/type'
import axios from 'axios'
import { useEffect, useState } from 'react'

export const useClock = () => {
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hh = String(now.getHours()).padStart(2, '0')
      const mm = String(now.getMinutes()).padStart(2, '0')
      const ss = String(now.getSeconds()).padStart(2, '0')

      if (hh !== hours) {
        setHours(hh)
      }

      if (mm !== minutes) {
        setMinutes(mm)
      }

      if (ss !== seconds) {
        setSeconds(ss)
      }
    }

    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [hours, minutes, seconds])

  const [weather, setWeather] = useState<weather | null>(null)
  useEffect(() => {
    axios
      .get('https://restapi.amap.com/v3/weather/weatherInfo?key=d392d64494354a502e6a166cc6c7e740&city=110000')
      .then((res) => {
        setWeather(res.data.lives[0])
      })
  }, [])

  return { hours, minutes, seconds, weather }
}
