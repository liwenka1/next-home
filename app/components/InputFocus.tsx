import { Input } from '@/components/ui/input'
import { useEffect, useRef } from 'react'

const InputFocus = () => {
  const inputFocusRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    if (inputFocusRef.current) {
      inputFocusRef.current.focus()
    }
  })

  return (
    <Input
      type="text"
      className="max-w-[680px] w-[calc(100%-60px)] backdrop-blur-md bg-white text-black focus:outline-0 focus:outline-white focus:leading-10 focus:align-middle absolute top-24"
      ref={inputFocusRef}
    />
  )
}

export default InputFocus
