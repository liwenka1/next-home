'use client'

import Background from '@/app/components/Background'
import Clock from '@/app/components/Clock'
import Focusinfo from '@/app/components/Focusinfo'
import Loading from '@/app/components/Loading'
import SiteInfo from '@/app/components/SiteInfo'
import useStatusStore from '@/app/stores/useStatusStore'
import { Toaster } from '@/components/ui/toaster'

const Main = () => {
  const { imgLoadStatus, oneDayEnglishStatus, weatherStatus, timeStatus } = useStatusStore()
  const status = imgLoadStatus && oneDayEnglishStatus && weatherStatus && timeStatus

  return (
    <div className="flex flex-col justify-between items-center h-full">
      {!status && <Loading />}
      <Background />
      <Clock />
      <SiteInfo />
      <Focusinfo />
      <Toaster />
    </div>
  )
}

export default Main
