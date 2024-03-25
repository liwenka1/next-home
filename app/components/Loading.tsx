import { PacmanLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className="fixed w-full h-full bg-black z-20 flex justify-center items-center">
      <PacmanLoader color="#36d7b7" size={150} />
    </div>
  )
}

export default Loading
