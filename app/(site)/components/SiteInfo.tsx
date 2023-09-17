import Link from 'next/link'
import { FaBlog, FaMusic, FaBook, FaPaperPlane } from 'react-icons/fa'

const SiteInfo = () => {
  return (
    <div className="flex-1 grid pb-5 text-white">
      <Link
        href="https://www.liwenkai.asia/"
        target="_blank"
        className="flex items-center justify-center text-2xl rounded-md gap-3 cursor-pointer hover:scale-110"
      >
        <FaBlog size={32} />
        Blog
      </Link>
      <Link
        href="https://www.liwenkai.asia/"
        target="_blank"
        className="flex items-center justify-center text-2xl rounded-md gap-3 cursor-pointer hover:scale-110"
      >
        <FaMusic size={32} />
        Music
      </Link>
      <Link
        href="https://www.websitenav.asia/"
        target="_blank"
        className="flex items-center justify-center text-2xl rounded-md gap-3 cursor-pointer hover:scale-110"
      >
        <FaBook size={32} />
        Nav
      </Link>
      <Link
        href="https://www.liwenkai.asia/"
        target="_blank"
        className="flex items-center justify-center text-2xl rounded-md gap-3 cursor-pointer hover:scale-110"
      >
        <FaPaperPlane size={32} />
        Search
      </Link>
    </div>
  )
}

export default SiteInfo
