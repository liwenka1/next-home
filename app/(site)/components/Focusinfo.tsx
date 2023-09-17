'use client'

import { oneDayEnglish } from '@/app/type'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiFillGithub, AiFillWechat, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai'

const Focusinfo = () => {
  const [oneDayEnglish, setOneDayEnglish] = useState<oneDayEnglish | null>(null)

  useEffect(() => {
    axios.get('https://api.oioweb.cn/api/common/OneDayEnglish').then((res) => {
      setOneDayEnglish(res.data.result)
    })
  }, [])
  return (
    <div className="text-white">
      <div className="md:flex flex-col items-center justify-center rounded-md text-base hidden">
        <p>{oneDayEnglish?.content}</p>
        <p>{oneDayEnglish?.note}</p>
      </div>
      <div className="flex items-center justify-center gap-3 mt-4 mb-2">
        <Link href="https://github.com/liwenka1" target="_blank" className="hover:scale-110 transition">
          <AiFillGithub size={24} />
        </Link>
        <Link
          href="https://weixin.sogou.com/weixin?type=1&query=kk%E6%83%B3%E5%BD%93%E7%A8%8B%E5%BA%8F%E5%91%98"
          target="_blank"
          className="hover:scale-110 transition"
        >
          <AiFillWechat size={24} className="hover:scale-110 transition" />
        </Link>
        <Link href="mailto:2020583117@qq.com" target="_blank" className="hover:scale-110 transition">
          <AiFillMail size={24} />
        </Link>
        <Link href="https://twitter.com/liwenka1" target="_blank" className="hover:scale-110 transition">
          <AiFillTwitterCircle size={24} />
        </Link>
      </div>
    </div>
  )
}

export default Focusinfo
