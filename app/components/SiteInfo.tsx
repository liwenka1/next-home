'use client'

import Link from 'next/link'
import { FaBlog, FaMusic, FaBook, FaPaperPlane } from 'react-icons/fa'
import InputFocus from './InputSearch'
import { useState } from 'react'

const SiteInfo = () => {
  const links = [
    {
      href: 'https://www.liwenkai.asia/',
      icon: <FaBlog />,
      text: 'Blog'
    },
    {
      href: 'https://www.liwenkai.asia/',
      icon: <FaMusic />,
      text: 'Music'
    },
    {
      href: 'https://www.websitenav.asia/',
      icon: <FaBook />,
      text: 'Nav'
    },
    {
      href: 'https://www.liwenkai.asia/',
      icon: <FaPaperPlane />,
      text: 'Search'
    }
  ]

  const [isFocus, setIsFocus] = useState(false)

  return (
    <div className="flex-1 flex flex-col justify-between pb-5 text-white w-full">
      {isFocus && (
        <div className="fixed inset-0 backdrop-filter backdrop-blur-md" onClick={() => setIsFocus(false)}></div>
      )}
      <div className="flex justify-center items-center relative">
        <InputFocus isFocus={isFocus} onFocus={() => setIsFocus(true)} />
      </div>
      <div className="md:flex md:items-center md:justify-center gap-10 grid grid-cols-2">
        {links.map(({ href, icon, text }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            className="flex items-center justify-center text-lg md:text-2xl rounded-md gap-3 cursor-pointer hover:scale-110"
          >
            {icon}
            {text}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SiteInfo
