import { Input } from '@/components/ui/input'
import { useEffect, useRef } from 'react'
import { FaGoogle, FaSearch } from 'react-icons/fa'

const InputFocus = () => {
  const inputFocusRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    if (inputFocusRef.current) {
      inputFocusRef.current.focus()
    }
  })

  return (
    <div className="absolute top-24 max-w-[680px] w-[calc(100%-60px)] flex flex-row">
      <Input
        type="text"
        className="backdrop-blur-md bg-white text-black focus:outline-0 focus:outline-white focus:leading-10 focus:align-middle rounded-full text-center"
        ref={inputFocusRef}
      />
      <div className="absolute h-9 w-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-black hover:opacity-50 text-gray-400">
        <FaGoogle size={15} />
      </div>
      <div className="absolute h-9 w-12 flex items-center justify-center right-0 cursor-pointer rounded-full hover:bg-black hover:opacity-50 text-gray-400">
        <FaSearch size={15} />
      </div>
    </div>
  )
}

export default InputFocus
