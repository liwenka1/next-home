import Link from 'next/link'
import { FaBlog, FaMusic, FaBook, FaPaperPlane } from 'react-icons/fa'
import { Input } from '@/components/ui/input'

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

  return (
    <div className="flex-1 flex flex-col justify-between pb-5 text-white">
      <div className="flex items-center justify-center pt-14">
        <div></div>
        <div>
          <Input type="text" />
        </div>
        <div></div>
      </div>
      <div className="md:flex gap-10 grid grid-cols-2">
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
