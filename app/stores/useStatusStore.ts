import { create } from 'zustand'

interface StatusStoreProps {
  imgLoadStatus: boolean
  setImgLoadStatus: (status: boolean) => void
}

const useStatusStore = create<StatusStoreProps>((set) => ({
  imgLoadStatus: false,
  setImgLoadStatus: (status) => set(() => ({ imgLoadStatus: status }))
}))

export default useStatusStore
