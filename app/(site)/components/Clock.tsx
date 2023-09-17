'use client'

import { useClock } from '@/app/hook/useClock'

const Clock = () => {
  const { hours, minutes, seconds, currentDate, weather } = useClock()

  return (
    <div className="flex flex-col items-center justify-center text-white text-4xl md:text-7xl md:w-auto cursor-default">
      <p>
        {currentDate.year + '-' + currentDate.month + '-' + currentDate.date} {currentDate.daysOfWeek[currentDate.day]}
      </p>
      <p>
        {hours[0]}
        {hours[1]}:{minutes[0]}
        {minutes[1]}:{seconds[0]}
        {seconds[1]}
      </p>
      <div className="flex items-center justify-center gap-1 md:gap-3 text-2xl md:text-4xl">
        <span>{weather?.city}</span>
        <span>{weather?.temperature}℃</span>
        <span>{weather?.weather}</span>
        <span>{weather?.winddirection}风</span>
        <span> {weather?.windpower}</span>
      </div>
    </div>
  )
}

export default Clock
