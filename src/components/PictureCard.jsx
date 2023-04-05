import { useState, useEffect } from 'react'

export const PictureCard = ({children, index}) => {
  const [rotate, setRotate] = useState(0)
  
  useEffect(() => {  
    if(index === 2) {
      setRotate(12)
    }
  }, [rotate, index])

  return (
      <div className={`rounded-lg border-4 border-white cursor-pointer w-40 md:w-48 overflow-hidden hover:z-10 rotate-${rotate}`}>
        {children}
    </div>
  )
} 
