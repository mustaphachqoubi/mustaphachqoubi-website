import { useRef, useState } from "react";

export const CreateService = () => {

  const [data, setData] = useState({})

  const areaRef = useRef(null);

  const createService = async (event) => {
    event.preventDefault();

    try{
      const respense = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/services`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        mode: 'no-cors',
        body: JSON.stringify(data.value)
      })
      console.log(respense)
    } catch (error){
      console.log(error)
    }
  };
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value
    });
  };

  return (
    <form
      onSubmit={createService}
      method="POST"
      className="h-screen w-full flex md:items-center justify-center p-10 flex-col pt-20 gap-10"
    >
      <div className="flex flex-col gap-1 items-center">
        <h3 className="text-sm font-bold flex gap-4">Service body </h3>
        <textarea
          onChange={handleInputChange}
          name="value"
          value={data.value || ""}
          required
          ref={areaRef}
          className="w-full md:w-80 h-60 rounded-md focus:outline-none border-2 border-black p-2 bg-transparent text-black"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-black text-white rounded-md cursor-pointer py-3 px-5 hover:border-white border-2 border-transparent"
      >
        Create Service
      </button>
    </form>
  );
};
