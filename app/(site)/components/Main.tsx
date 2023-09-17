import Clock from './Clock'
import Focusinfo from './Focusinfo'
import SiteInfo from './SiteInfo'

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
