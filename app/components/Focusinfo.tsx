import { oneDayEnglish } from '@/app/type'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { AiFillGithub, AiFillWechat, AiFillMail, AiFillTwitterCircle } from 'react-icons/ai'
import useStatusStore from '../stores/useStatusStore'
import { useToast } from '@/components/ui/use-toast'

const Focusinfo = () => {
  const [oneDayEnglish, setOneDayEnglish] = useState<oneDayEnglish | null>(null)
  const { setOneDayEnglishStatus } = useStatusStore()
  const { toast } = useToast()
  useEffect(() => {
    axios
      .get('/api/oneDayEnglish')
      .then((res) => setOneDayEnglish(res.data.result))
      .catch(() =>
        toast({
          variant: 'destructive',
          description: 'Something went wrong!'
        })
      )
      .finally(() => setOneDayEnglishStatus(true))
  }, [setOneDayEnglishStatus, toast])

  const contactLinks = [
    {
      icon: <AiFillGithub />,
      href: 'https://github.com/liwenka1'
    },
    {
      icon: <AiFillWechat />,
      href: 'https://weixin.sogou.com/weixin?type=1&query=kk%E6%83%B3%E5%BD%93%E7%A8%8B%E5%BA%8F%E5%91%98'
    },
    {
      icon: <AiFillMail />,
      href: 'mailto:2020583117@qq.com'
    },
    {
      icon: <AiFillTwitterCircle />,
      href: 'https://twitter.com/liwenka1'
    }
  ]
  return (
    <div className="text-white pb-10 z-0">
      <div className="md:flex flex-col items-center justify-center rounded-md text-base hidden">
        <p>{oneDayEnglish?.content}</p>
        <p>{oneDayEnglish?.note}</p>
      </div>
      <div className="flex items-center justify-center gap-3 mt-4 mb-2">
        {contactLinks.map(({ icon, href }, index) => (
          <Link key={index} href={href} target="_blank" className="hover:scale-110 transition-transform">
            {React.cloneElement(icon, { size: 24 })}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Focusinfo
