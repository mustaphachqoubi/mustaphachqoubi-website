export const PictureCard = ({children, index }) => {

  return (
      <div className={`rounded-lg border-4 border-white cursor-pointer w-40 md:w-48 overflow-hidden hover:z-10 origin-center ${index === 2 ? 'rotate-12' : ''}`}>
        {children}
    </div>
  )
} 
