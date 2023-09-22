'use client'

import Background from '@/app/components/Background'
import Clock from '@/app/components/Clock'
import Focusinfo from '@/app/components/Focusinfo'
import SiteInfo from '@/app/components/SiteInfo'
import useStatusStore from '@/app/stores/useStatusStore'

const Main = () => {
  const { imgLoadStatus, oneDayEnglishStatus, weatherStatus } = useStatusStore()

  return (
    <div className="flex flex-col justify-between items-center h-full">
      {(!imgLoadStatus || !oneDayEnglishStatus || !weatherStatus) && (
        <p className="fixed w-full h-full bg-black z-20 flex items-center justify-center">loading...</p>
      )}
      <Background />
      <Clock />
      <SiteInfo />
      <Focusinfo />
    </div>
  )
}

export default Main
