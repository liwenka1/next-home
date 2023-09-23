import Image from 'next/image'
import useStatusStore from '../stores/useStatusStore'
import { useEffect, useState } from 'react'
import { bingCover } from '../type'
import axios from 'axios'

const Background = () => {
  const { setImgLoadStatus } = useStatusStore()
  const [bingCover, setBingCover] = useState<bingCover[]>([])
  useEffect(() => {
    axios.get('/api/bing').then((res) => {
      setBingCover(res.data.result)
    })
  }, [])

  return (
    <>
      <div className="fixed w-full h-full z-0 bg-black opacity-50" />
      <div className="fixed -z-10 w-full h-full">
        {bingCover.length > 0 && (
          <Image
            alt="Background"
            src={bingCover[Math.floor(Math.random() * 7)].url}
            fill
            style={{ objectFit: 'cover' }}
            onLoad={() => setImgLoadStatus(true)}
          />
        )}
      </div>
    </>
  )
}

export default Background
