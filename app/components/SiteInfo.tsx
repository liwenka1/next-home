import Link from 'next/link'
import InputSearch from './InputSearch'
import { useState } from 'react'
import { siteInfoLinks } from '../data'

const SiteInfo = () => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <div className="flex-1 flex flex-col justify-between pb-5 text-white w-full z-10">
      {isFocus && (
        <div className="fixed inset-0 backdrop-filter backdrop-blur-md" onClick={() => setIsFocus(false)}></div>
      )}
      <div className="flex justify-center items-center relative">
        <InputSearch isFocus={isFocus} onFocus={() => setIsFocus(true)} />
      </div>
      <div className="md:flex md:items-center md:justify-center gap-10 grid grid-cols-2">
        {siteInfoLinks.map(({ href, icon: Icon, text }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            className="flex items-center justify-center text-lg md:text-2xl rounded-md gap-3 cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <Icon />
            {text}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SiteInfo
