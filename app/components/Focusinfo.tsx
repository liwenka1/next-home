import { oneDayEnglish } from '@/app/type'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useStatusStore from '../stores/useStatusStore'
import { useToast } from '@/components/ui/use-toast'
import { contactLinks } from '../data'

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

  return (
    <div className="text-white pb-10 z-0">
      <div className="md:flex flex-col items-center justify-center rounded-md text-base hidden">
        <p>{oneDayEnglish?.content}</p>
        <p>{oneDayEnglish?.note}</p>
      </div>
      <div className="flex items-center justify-center gap-3 mt-4 mb-2">
        {contactLinks.map(({ icon: Icon, href }, index) => (
          <Link key={index} href={href} target="_blank" className="hover:scale-110 transition-transform">
            <Icon size={24} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Focusinfo
