import { create } from 'zustand'

interface StatusStoreProps {
  imgLoadStatus: boolean
  setImgLoadStatus: (status: boolean) => void
  oneDayEnglishStatus: boolean
  setOneDayEnglishStatus: (status: boolean) => void
  weatherStatus: boolean
  setWeatherStatus: (status: boolean) => void
}

const useStatusStore = create<StatusStoreProps>((set) => ({
  imgLoadStatus: false,
  setImgLoadStatus: (status) => set(() => ({ imgLoadStatus: status })),
  oneDayEnglishStatus: false,
  setOneDayEnglishStatus: (status) => set(() => ({ oneDayEnglishStatus: status })),
  weatherStatus: false,
  setWeatherStatus: (status) => set(() => ({ weatherStatus: status }))
}))

export default useStatusStore
