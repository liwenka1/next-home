// import Background from '@/app/components/Background'
import Clock from '@/app/components/Clock'
import Focusinfo from '@/app/components/Focusinfo'
import SiteInfo from '@/app/components/SiteInfo'

const Main = () => {
  return (
    <div className="flex flex-col justify-between items-center h-full">
      <Clock />
      <SiteInfo />
      <Focusinfo />
    </div>
  )
}

export default Main
