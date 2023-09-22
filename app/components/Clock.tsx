'use client'

import { useClock } from '@/app/hook/useClock'

const Clock = () => {
  const now = new Date()
  const date = now.getDate()
  const month = now.getMonth() + 1
  const year = now.getFullYear()
  const day = now.getDay()
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const { hours, minutes, seconds, weather } = useClock()

  return (
    <div className="flex flex-col items-center justify-center text-white text-xl md:text-3xl md:w-auto cursor-default pt-20 z-10">
      <p suppressHydrationWarning>
        {year + '-' + month + '-' + date} {daysOfWeek[day]}
      </p>
      <p suppressHydrationWarning>
        {hours[0]}
        {hours[1]}:{minutes[0]}
        {minutes[1]}:{seconds[0]}
        {seconds[1]}
      </p>
      <p className="flex items-center justify-center gap-1 md:gap-3 text-lg md:text-2xl">
        <span>{weather?.city}</span>
        <span>{weather?.temperature}℃</span>
        <span>{weather?.weather}</span>
        <span>{weather?.winddirection}风</span>
        <span> {weather?.windpower}</span>
      </p>
    </div>
  )
}

export default Clock
