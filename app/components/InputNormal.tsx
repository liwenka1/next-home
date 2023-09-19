import { Input } from '@/components/ui/input'

interface InputNormalProps {
  onFocus: () => void
}

const InputNormal: React.FC<InputNormalProps> = ({ onFocus }) => {
  return (
    <Input
      type="text"
      className="max-w-[680px] w-[calc(100%-60px)] backdrop-blur-xl bg-black/20 placeholder:text-white placeholder:text-center placeholder:pt-1 border-0 absolute top-36"
      placeholder="Search"
      onFocus={onFocus}
    />
  )
}

export default InputNormal
