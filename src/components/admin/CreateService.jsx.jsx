import { useRef } from "react";

export const CreateService = () => {

  const areaRef = useRef(null);

  const createService = async () => {
    const body = await areaRef;
    if (body.current.value) {
            console.log(body)

      const respense = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/services/`, {
        method: "POST",
        body: JSON.stringify(body),
      });
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createService();
      }}
      method="POST"
      className="h-screen w-full flex md:items-center justify-center p-10 flex-col pt-20 gap-10"
    >
      <div className="flex flex-col gap-1 items-center">
        <h3 className="text-sm font-bold flex gap-4">Service body </h3>
        <textarea
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
