import { Pictures } from './Pictures'
import { Work } from './Work.jsx'

export const PicturesAndWork = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col md:flex-row">
      <div className="flex-1 h-screen w-full flex items-center justify-center">
        <Pictures />
      </div>
      <div className="flex-1 h-screen w-full flex justify-center items-center">
        <Work />
      </div>
    </div>
  )
}
