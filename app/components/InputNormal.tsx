import { Input } from '@/components/ui/input'

interface InputNormalProps {
  onFocus: () => void
}

const InputNormal: React.FC<InputNormalProps> = ({ onFocus }) => {
  return (
    <Input
      type="text"
      className="max-w-[680px] w-[calc(100%-60px)] backdrop-blur-md bg-gray-500/50 border-0 leading-10 absolute top-36"
      placeholder="Search"
      onFocus={onFocus}
    />
  )
}

export default InputNormal
