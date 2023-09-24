import { useClock } from '@/app/hook/useClock'
import { format, getDay } from 'date-fns'
import Image from 'next/image'

const Clock = () => {
  const { time, weather, weatherIcon } = useClock()
  const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

  return (
    <>
      <div className="flex flex-col items-center justify-center text-white md:w-auto cursor-default pt-40 z-10 gap-1">
        <p suppressHydrationWarning className="text-7xl">
          {format(time, 'HH:mm')}
        </p>
        <p suppressHydrationWarning className="text-base text-gray-200 font-light mt-5">
          {format(time, 'MM 月 dd 日')} {daysOfWeek[getDay(time)]}
        </p>
      </div>
      <div className="fixed right-5 flex items-center justify-center flex-col">
        <div className="flex items-center justify-center">
          <Image src={weatherIcon} alt="weatherIcon" width={80} height={80} />
          <span className="text-3xl">{weather?.temperature}℃</span>
        </div>
        <div className="flex gap-1">
          <span>{weather?.city}</span>
          <span>{weather?.weather}</span>
          <span>{weather?.winddirection}风</span>
          <span> {weather?.windpower}</span>
        </div>
      </div>
    </>
  )
}

export default Clock
