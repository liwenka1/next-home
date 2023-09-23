'use client'

import Background from '@/app/components/Background'
import Clock from '@/app/components/Clock'
import Focusinfo from '@/app/components/Focusinfo'
import SiteInfo from '@/app/components/SiteInfo'
import useStatusStore from '@/app/stores/useStatusStore'
import { Toaster } from '@/components/ui/toaster'

const Main = () => {
  const { imgLoadStatus, oneDayEnglishStatus, weatherStatus } = useStatusStore()
  const status = imgLoadStatus && oneDayEnglishStatus && weatherStatus

  return (
    <div className="flex flex-col justify-between items-center h-full">
      {!status && <div className="fixed w-full h-full backdrop-blur-md bg-black/20 z-20" />}
      <Background />
      <Clock />
      <SiteInfo />
      <Focusinfo />
      <Toaster />
    </div>
  )
}

export default Main
