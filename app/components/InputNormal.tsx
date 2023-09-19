import { Input } from '@/components/ui/input'
import { FaGoogle, FaSearch } from 'react-icons/fa'

interface InputNormalProps {
  onFocus: () => void
}

const InputNormal: React.FC<InputNormalProps> = ({ onFocus }) => {
  return (
    <div className="absolute top-36 max-w-[680px] w-[calc(100%-60px)] flex flex-row" onClick={onFocus}>
      <Input
        type="text"
        className="backdrop-blur-xl bg-black/20 placeholder:text-white placeholder:text-center placeholder:pt-1 border-0 rounded-full"
        placeholder="Search"
        onFocus={onFocus}
      ></Input>
      <div className="absolute h-9 w-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-black hover:bg-opacity-50">
        <FaGoogle size={15} />
      </div>
      <div className="absolute h-9 w-12 flex items-center justify-center right-0 cursor-pointer rounded-full hover:bg-black hover:bg-opacity-50">
        <FaSearch size={15} />
      </div>
    </div>
  )
}

export default InputNormal
