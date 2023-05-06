import { useParams } from 'react-router-dom'
import { services } from '../assets/dummy.js'

export const Service = () => {
  const { service, itemId} = useParams();

  const serviceObj = services.find(s => s.title === service);

  const filteredItems = serviceObj.items?.filter(item => item.id === itemId);
  
  
  return (
  <div className="h-screen flex justify-center items-center">
      {filteredItems.map(i => i.id === itemId)}
  </div>
  )
}
