import { Input } from '@/components/ui/input'
import { useEffect, useRef } from 'react'

interface InputFocusProps {
  onBlur: () => void
}

const InputFocus: React.FC<InputFocusProps> = ({ onBlur }) => {
  const inputFocusRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (inputFocusRef.current) {
      inputFocusRef.current.focus()
    }
  })

  return (
    <Input
      type="text"
      className="max-w-[680px] w-[calc(100%-60px)] backdrop-blur-md bg-gray-100/50 border-0 leading-10 absolute top-24"
      ref={inputFocusRef}
      onBlur={onBlur}
    />
  )
}

export default InputFocus
