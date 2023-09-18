'use client'

import Link from 'next/link'
import { FaBlog, FaMusic, FaBook, FaPaperPlane } from 'react-icons/fa'
import InputFocus from './InputFocus'
import InputNormal from './InputNormal'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './inputSearch.css'

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

  const [onFocus, setOnFocus] = useState(false)

  return (
    <div className="flex-1 flex flex-col justify-between pb-5 text-white w-full relative">
      {onFocus && <div className="fixed inset-0 bg-black opacity-50"></div>}
      <div className="flex justify-center items-center">
        <CSSTransition in={onFocus} timeout={300} classNames="input-transition" unmountOnExit>
          <InputFocus onBlur={() => setOnFocus(false)} />
        </CSSTransition>
        <CSSTransition in={!onFocus} timeout={300} classNames="input-transition" unmountOnExit>
          <InputNormal onFocus={() => setOnFocus(true)} />
        </CSSTransition>
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
