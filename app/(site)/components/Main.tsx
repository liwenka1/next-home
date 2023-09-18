import Clock from '@/app/components/Clock'
import Focusinfo from '@/app/components/Focusinfo'
import SiteInfo from '@/app/components/SiteInfo'

const Main = () => {
  return (
    <div className="flex flex-col justify-between items-center h-full pt-20 pb-12">
      <Clock />
      <SiteInfo />
      <Focusinfo />
    </div>
  )
}

export default Main
