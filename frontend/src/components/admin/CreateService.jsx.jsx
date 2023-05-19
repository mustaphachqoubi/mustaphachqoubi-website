import { useEffect } from 'react'

export const TitleAndInput = ({ title }) => {
  return (
  <div className="flex flex-col gap-1">
    <h3 className="text-sm font-bold">{title}</h3>
    <input type="text" name={title} className="w-full md:w-80 h-10 rounded-md focus:outline-none border-2 border-black px-2 bg-transparent text-black"/>
  </div>
  )
}

export const CreateService = () => {

  const handleSubmit = () => {}

  useEffect(() => {
    const createService = async () => {
      const respense = await fetch('http://localhost:4000/api/services/', {
        method: "POST",
        body: JSON.stringify()
      })
    }
  })

  return (
    <form onSubmit={() => handleSubmit()} method="POST" className="h-screen w-full flex md:items-center justify-center p-10 flex-col pt-20 gap-10">
      <TitleAndInput title={"Service Title"} />
      <TitleAndInput title={"Service number"} />
      
      <div className="flex flex-col gap-1 items-center">
    <h3 className="text-sm font-bold flex gap-4">Service items <p className="underline text-center">(title, number, price, features, options)</p></h3>
        <textarea  className="w-full md:w-80 h-40 rounded-md focus:outline-none border-2 border-black p-2 bg-transparent text-black"></textarea>
      </div>

        <button type="submit" className="bg-black text-white rounded-md cursor-pointer py-3 px-5 hover:border-white border-2 border-transparent">Create Service</button>
    </form>
  )
}
