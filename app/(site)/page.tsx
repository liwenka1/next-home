'use client'

import Background from '../components/Background'
import useStatusStore from '../stores/useStatusStore'
import Footer from './components/Footer'
import Main from './components/Main'

const Home = () => {
  const { imgLoadStatus } = useStatusStore()
  return (
    <>
      <Background />
      {imgLoadStatus ? (
        <div className="h-full font-['pacificoregular']">
          <Main />
          <Footer />
        </div>
      ) : (
        <div className="fixed w-full h-full bg-black z-20 flex items-center justify-center">loading...</div>
      )}
    </>
  )
}

export default Home
