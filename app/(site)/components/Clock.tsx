'use client'

import { useEffect, useMemo, useState } from 'react'

const Clock = () => {
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')

  useEffect(() => {
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  })

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
  const currentDate = useMemo(() => {
    const currentDate = new Date()
    const date = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()
    const day = currentDate.getDay()
    const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    return { date, month, year, day, daysOfWeek }
  }, [])

  return (
    <div className="rounded-lg flex flex-col items-center justify-center text-white text-7xl sm:text-9xl w-full">
      <p>
        {currentDate.year + '-' + currentDate.month + '-' + currentDate.date}
        {currentDate.daysOfWeek[currentDate.day]}
      </p>
      <p>
        {hours[0]}
        {hours[1]}:{minutes[0]}
        {minutes[1]}:{seconds[0]}
        {seconds[1]}
      </p>
    </div>
  )
}

export default Clock
