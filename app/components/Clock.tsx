'use client'

import { useClock } from '@/app/hook/useClock'
import { format, getDay } from 'date-fns'

const Clock = () => {
  const { time, weather } = useClock()
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  return (
    <div className="flex flex-col items-center justify-center text-white text-xl md:text-3xl md:w-auto cursor-default pt-20 z-10">
      <p suppressHydrationWarning>
        {format(time, 'yyyy-MM-dd')} {daysOfWeek[getDay(time)]}
      </p>
      <p suppressHydrationWarning>{format(time, 'HH:mm:ss')}</p>
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
