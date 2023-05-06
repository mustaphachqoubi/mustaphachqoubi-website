import { useParams } from 'react-router-dom'
import { services } from '../assets/dummy.js'

export const Service = () => {
  const { service, itemId} = useParams();

  return (
  <div className="h-screen flex justify-center items-center">
  </div>
  )
}
