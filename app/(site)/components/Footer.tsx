import Link from 'next/link'

const Footer = () => {
  return (
    <div className="fixed bottom-0 bg-black text-gray-400 w-full bg-opacity-50 h-7 md:h-10 flex justify-center items-center text-sm md:text-base cursor-default">
      <span>Since 2023 李文凯 &</span>
      <Link
        href="https://github.com/liwenka1/next-home"
        target="_blank"
        className="px-1 hover:text-white transition-colors"
      >
        Liwenka1
      </Link>
      <span>All Rights Reserved</span>
    </div>
  )
}

export default Footer
