import { Input } from '@/components/ui/input'
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { FaGoogle, FaSearch } from 'react-icons/fa'
import fetchJsonp from 'fetch-jsonp'
import clsx from 'clsx'
import { ScrollArea } from '@/components/ui/scroll-area'

interface InputSearchProps {
  isFocus: boolean
  onFocus: () => void
}

const InputSearch: React.FC<InputSearchProps> = ({ isFocus, onFocus }) => {
  const [keyword, setKeyword] = useState<string>('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      goSearch()
    }
  }
  const goSearch = (s?: string) => {
    if (s) {
      window.open(`https://www.baidu.com/s?wd=${s}`)
    } else {
      window.open(`https://www.baidu.com/s?wd=${keyword}`)
    }
  }

  const [suggestion, setSuggestion] = useState<Array<string>>([])
  useEffect(() => {
    let timer: NodeJS.Timeout

    if (keyword) {
      timer = setTimeout(() => {
        const encodedKeyword = encodeURIComponent(keyword)
        fetchJsonp(`https://suggestion.baidu.com/su?wd=${encodedKeyword}&cb=json`, {
          // 回调参数
          jsonpCallback: 'cb'
        })
          .then((response) => response.json())
          .then((data) => {
            setSuggestion(data.s)
          })
          .catch((error) => {
            console.log(error)
          })
      }, 300)
    } else {
      setSuggestion([])
    }

    return () => clearTimeout(timer)
  }, [keyword])

  useEffect(() => {
    if (!isFocus) {
      setKeyword('')
    }
  }, [isFocus])

  return (
    <div
      className={clsx(
        `absolute max-w-[680px] w-[calc(100%-60px)] h-10 flex flex-row top-24 transition-transform duration-500`,
        isFocus && 'translate-y-[-30px]'
      )}
    >
      <Input
        type="text"
        className={clsx(
          `backdrop-blur-md bg-white text-black focus:outline-0 focus:outline-white focus:align-middle rounded-full text-center border-0`,
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
          `absolute h-full w-12 flex items-center justify-center cursor-pointer rounded-full transition-colors duration-500`,
          isFocus
            ? 'hover:bg-gray-300 hover:bg-opacity-50 text-gray-500'
            : 'hover:bg-black hover:bg-opacity-50 text-white'
        )}
      >
        <FaGoogle size={15} />
      </div>
      <div
        className={clsx(
          `absolute h-full w-12 flex items-center justify-center cursor-pointer rounded-full right-0 transition-colors duration-500`,
          isFocus
            ? 'hover:bg-gray-300 hover:bg-opacity-50 text-gray-500'
            : 'hover:bg-black hover:bg-opacity-50 text-white'
        )}
        onClick={() => goSearch()}
      >
        <FaSearch size={15} />
      </div>
      {isFocus && suggestion.length > 0 && (
        <div className="absolute w-full max-h-[680px] h-72 top-14 backdrop-blur-xl bg-black/20 rounded-md">
          <ScrollArea className="h-full w-full border-0 p-4 rounded-md">
            {suggestion.map((s, i) => (
              <p
                key={i}
                className="cursor-pointer hover:bg-gray-300 hover:bg-opacity-50 rounded-md pl-4 py-1"
                onClick={() => goSearch(s)}
              >
                {s}
              </p>
            ))}
          </ScrollArea>
        </div>
      )}
    </div>
  )
}

export default InputSearch
