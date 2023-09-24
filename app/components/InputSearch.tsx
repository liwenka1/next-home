import { Input } from '@/components/ui/input'
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import fetchJsonp from 'fetch-jsonp'
import clsx from 'clsx'
import { ScrollArea } from '@/components/ui/scroll-area'
import { IconType } from 'react-icons'
import { engList } from '../data'

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
      window.open(`${activeEngHref}${s}`)
    } else {
      window.open(`${activeEngHref}${keyword}`)
    }
  }

  const [suggestion, setSuggestion] = useState<string[]>([])
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

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

    if (!isFocus) {
      setKeyword('')
      setIsChangeEng(false)
      setSuggestion([])
      if (timer) {
        clearTimeout(timer)
      }
    }

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [keyword, isFocus])

  const [isChangeEng, setIsChangeEng] = useState(false)
  const handleChangeEng = () => {
    setIsChangeEng(!isChangeEng)
  }
  const [activeEng, setActiveEng] = useState<{ icon: IconType }>({ icon: engList[0].icon })
  const [activeEngHref, setActiveEngHref] = useState<string>('https://www.baidu.com/s?wd=')

  const handleSearch = () => {
    goSearch()
  }

  return (
    <div
      className={clsx(
        `absolute w-[calc(100%-60px)] h-10 flex flex-row top-5 transition-all duration-500`,
        isFocus ? 'max-w-[680px]' : 'max-w-[340px]'
      )}
    >
      <Input
        type="text"
        className={clsx(
          'focus:outline-0 focus:outline-white focus:align-middle rounded-full text-center border-0 placeholder:text-white placeholder:text-center placeholder:pt-1',
          isFocus ? 'bg-white text-black' : 'backdrop-blur-xl bg-black/20 '
        )}
        placeholder={isFocus ? '' : 'Search'}
        value={keyword}
        onFocus={onFocus}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        onClick={() => setIsChangeEng(false)}
      />
      <div
        className={clsx(
          `absolute h-full w-12 flex items-center justify-center cursor-pointer rounded-full transition-colors duration-500`,
          isFocus ? 'hover:bg-gray-300 hover:bg-opacity-50 text-gray-500' : 'hidden'
        )}
        onClick={handleChangeEng}
      >
        <activeEng.icon size={20} />
      </div>
      <div
        className={clsx(
          `absolute h-full w-12 flex items-center justify-center cursor-pointer rounded-full right-0 transition-colors duration-500`,
          isFocus ? 'hover:bg-gray-300 hover:bg-opacity-50 text-gray-500' : 'hidden'
        )}
        onClick={() => handleSearch()}
      >
        <FaSearch size={20} />
      </div>
      <div
        className={clsx(
          isFocus && keyword.length > 0 && suggestion.length > 0
            ? 'absolute w-full max-h-[680px] top-14 backdrop-blur-xl bg-black/20 rounded-md'
            : 'hidden'
        )}
      >
        <ScrollArea className="h-full w-full border-0 rounded-md">
          {suggestion.map((s, i) => (
            <p
              key={i}
              className="cursor-pointer hover:bg-black/20 hover:bg-opacity-50 hover:pl-8 transition-all duration-300 rounded-md pl-4 py-1"
              onClick={() => goSearch(s)}
            >
              {s}
            </p>
          ))}
        </ScrollArea>
      </div>
      <div
        className={clsx(
          isChangeEng && isFocus
            ? 'absolute w-1/3 min-w-[150px] max-h-[680px] top-14 backdrop-blur-xl bg-black/70 rounded-md'
            : 'hidden'
        )}
      >
        <ScrollArea className="h-full w-full border-0 rounded-md">
          {engList.map(({ icon: Icon, title, href }, i) => (
            <div
              key={i}
              className="flex py-3 pl-4 hover:pl-8 w-full cursor-pointer hover:bg-gray-800 hover:bg-opacity-50 transition-all duration-300 rounded-md"
              onClick={() => {
                setIsChangeEng(false)
                setActiveEng({ icon: Icon })
                setActiveEngHref(href)
              }}
            >
              <Icon size={20} />
              <span className="text-sm pl-2">{title}</span>
            </div>
          ))}
        </ScrollArea>
      </div>
    </div>
  )
}

export default InputSearch
