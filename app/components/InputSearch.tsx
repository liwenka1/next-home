import { Input } from '@/components/ui/input'
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { FaGoogle, FaSearch } from 'react-icons/fa'
import fetchJsonp from 'fetch-jsonp'
import clsx from 'clsx'

interface InputSearchProps {
  isFocus: boolean
  onFocus: () => void
}

const InputSearch: React.FC<InputSearchProps> = ({ isFocus, onFocus }) => {
  const [keyword, setKeyword] = useState<string>('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
    console.log('当前输入值为：', event.target.value)
  }
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log('用户按下了按键', event.key, '，对应的 Unicode 值为', event.keyCode)
    if (event.key === 'Enter') {
      goSearch()
    }
  }
  const goSearch = () => {
    window.open(`https://www.baidu.com/s?wd=${keyword}`)
  }

  useEffect(() => {
    if (keyword) {
      const encodedKeyword = encodeURIComponent(keyword)
      fetchJsonp(`https://suggestion.baidu.com/su?wd=${encodedKeyword}&cb=json`, {
        // 回调参数
        jsonpCallback: 'cb'
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [keyword])

  useEffect(() => {
    if (!isFocus) {
      setKeyword('')
    }
  }, [isFocus])

  return (
    <div className={clsx(`absolute max-w-[680px] w-[calc(100%-60px)] flex flex-row`, isFocus ? ' top-24' : ' top-36')}>
      <Input
        type="text"
        className={clsx(
          `backdrop-blur-md bg-white text-black focus:outline-0 focus:outline-white focus:leading-10 focus:align-middle rounded-full text-center border-0 transition duration-350 ease-linear`,
          !isFocus && 'backdrop-blur-xl bg-black/20 placeholder:text-white placeholder:text-center placeholder:pt-1'
        )}
        placeholder={isFocus ? '' : 'Search'}
        value={keyword}
        onFocus={onFocus}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div
        className={clsx(
          `absolute h-9 w-12 flex items-center justify-center cursor-pointer rounded-full`,
          isFocus
            ? 'hover:bg-gray-300 hover:bg-opacity-50 text-gray-500'
            : 'hover:bg-black hover:bg-opacity-50 text-white'
        )}
      >
        <FaGoogle size={15} />
      </div>
      <div
        className={clsx(
          `absolute h-9 w-12 flex items-center justify-center cursor-pointer rounded-full right-0`,
          isFocus
            ? 'hover:bg-gray-300 hover:bg-opacity-50 text-gray-500'
            : 'hover:bg-black hover:bg-opacity-50 text-white'
        )}
        onClick={() => goSearch()}
      >
        <FaSearch size={15} />
      </div>
    </div>
  )
}

export default InputSearch
