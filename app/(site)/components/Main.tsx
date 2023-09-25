'use client'

import Background from '@/app/components/Background'
import Clock from '@/app/components/Clock'
import Focusinfo from '@/app/components/Focusinfo'
import SiteInfo from '@/app/components/SiteInfo'
import useStatusStore from '@/app/stores/useStatusStore'
import { Toaster } from '@/components/ui/toaster'

const Main = () => {
  const { imgLoadStatus, oneDayEnglishStatus, weatherStatus, timeStatus } = useStatusStore()
  const status = imgLoadStatus && oneDayEnglishStatus && weatherStatus && timeStatus

  return (
    <div className="flex flex-col justify-between items-center h-full">
      {!status && (
        <div className="fixed w-full h-full backdrop-blur-md bg-black z-20 flex justify-center items-center text-3xl">
          加载中....
        </div>
      )}
      <Background />
      <Clock />
      <SiteInfo />
      <Focusinfo />
      <Toaster />
    </div>
  )
}

export default Main
