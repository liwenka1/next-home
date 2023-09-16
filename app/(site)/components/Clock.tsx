'use client'

import { useEffect, useState } from 'react'

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

  return (
    <div className="rounded-lg px-10 flex text-white text-7xl sm:text-9xl">
      <span>
        {hours[0]}
        {hours[1]}:{minutes[0]}
        {minutes[1]}:{seconds[0]}
        {seconds[1]}
      </span>
    </div>
  )
}

export default Clock
