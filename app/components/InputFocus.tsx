import { Input } from '@/components/ui/input'
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { FaGoogle, FaSearch } from 'react-icons/fa'
import fetchJsonp from 'fetch-jsonp'

const InputFocus = () => {
  const inputFocusRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    if (inputFocusRef.current) {
      inputFocusRef.current.focus()
    }
  })

  const [value, setValue] = useState<string>('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    console.log('当前输入值为：', event.target.value)
  }
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log('用户按下了按键', event.key, '，对应的 Unicode 值为', event.keyCode)
    if (event.key === 'Enter') {
      window.open(`https://www.baidu.com/s?wd=${value}`)
    }
  }

  useEffect(() => {
    if (value) {
      const encodedKeyword = encodeURIComponent(value)
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
  }, [value])

  return (
    <div className="absolute top-24 max-w-[680px] w-[calc(100%-60px)] flex flex-row">
      <Input
        type="text"
        className="backdrop-blur-md bg-white text-black focus:outline-0 focus:outline-white focus:leading-10 focus:align-middle rounded-full text-center"
        ref={inputFocusRef}
        value={value}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div className="absolute h-9 w-12 flex items-center justify-center cursor-pointer rounded-full hover:bg-gray-300 hover:bg-opacity-50 text-gray-500">
        <FaGoogle size={15} />
      </div>
      <div
        className="absolute h-9 w-12 flex items-center justify-center right-0 cursor-pointer rounded-full hover:bg-gray-300 hover:bg-opacity-50 text-gray-500"
        onClick={() => window.open(`https://www.baidu.com/s?wd=${value}`)}
      >
        <FaSearch size={15} />
      </div>
    </div>
  )
}

export default InputFocus
