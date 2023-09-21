'use client'

import Image from 'next/image'
import useStatusStore from '../stores/useStatusStore'

const Background = () => {
  const { setImgLoadStatus } = useStatusStore()
  return (
    <div className="fixed z-0 w-full h-full">
      <Image
        alt="Background"
        src={`/images/bg0${Math.floor(Math.random() * 3) + 1}.png`}
        layout="fill"
        objectFit="cover"
        onLoad={() => setImgLoadStatus(true)}
      />
    </div>
  )
}

export default Background
