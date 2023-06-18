import { useEffect, useState} from "react";
import { AiOutlineCaretDown, AiFillCaretRight } from "react-icons/ai";
import starBackground from "../assets/starBackground.mp4";
import { useLocation } from "react-router-dom";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners"

export const Service = () => {
  const [itemOfService, setItemOfService] = useState({});
  const [optionSelected, setIsOptionSelected] = useState(false);
  const [featuresOpened, setFeaturesOpened] = useState(false);
  const [optionId, setOptionId] = useState(-1);
  const [formData, setFormData] = useState({});
  const [isLetsTalkCliked, setIsLetsTalkClicked] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getItemOfService = async () => {
      const item = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/services/${location.pathname}`
      );
      const data = await item.json();
      if (item.ok) {
        setItemOfService(data);
      }
    };
    getItemOfService();
  }, [location.pathname]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/clients/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      navigate("/meet");
    } catch (err) {
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
      service: location.pathname,
      optionSelected: optionSelected,
      optionId: optionId,
    });
  };

  const HandleRadio = () => {
    return <input type="radio" checked readOnly />;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLetsTalkClicked(false)
    }, 1000)
  }, [isLetsTalkCliked])

  return (
    <div className="flex justify-center items-center py-10 w-full ">
      <div className="w-full flex justify-center items-center p-10 overflow-auto">
        {!itemOfService ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col w-full gap-10 items-center">
            <div className="overflow-hidden bg-white w-full sm:w-96 h-20 text-black rounded-lg flex gap-6 justify-center items-center font-bold tracking-wide text-sm md:text-lg">
              {itemOfService.title}
            </div>
            {itemOfService.options?.length > 0 ? (
              itemOfService.options?.map((option) => (
                <div
                  key={option._id}
                  className="flex flex-col items-center gap-4 w-full"
                >
                  <h3 className="text-sm underline">
                    Do you want to add an option ?
                  </h3>
                  <div
                    onClick={() => {
                      optionSelected === false
                        ? setIsOptionSelected(true)
                        : setIsOptionSelected(false);
                      setOptionId(option._id);
                    }}
                    className={`${
                      optionSelected ? "border-black" : " border-transparent"
                    } cursor-pointer border-4 overflow-hidden bg-white w-full sm:w-96 min-h-20 text-black rounded-lg flex text-xs sm:text-md gap-6 px-6 py-2 justify-between items-center font-bold tracking-wide`}
                  >
                    <div className="flex flex-col gap-1">
                      <p>{option.name}</p> <p>(+ ${option.price})</p>
                    </div>
                    {optionSelected ? <HandleRadio /> : <input type="radio" />}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center gap-4 w-full">
                <h3 className="text-sm underline">
                  Do you want to add an option ?
                </h3>
                <div
                  className={` cursor-pointer border-4 overflow-hidden bg-white w-full sm:w-96 h-20 text-black rounded-lg flex text-xs sm:text-md gap-6 px-6 justify-center items-center font-bold tracking-wide`}
                >
                  <div className="flex text-center">
                    <p>This service has no options !</p>
                  </div>
                </div>
              </div>
            )}
            <div></div>

            <div className="flex flex-col gap-2 w-full items-center">
              <p
                onClick={() => {
                  featuresOpened === true
                    ? setFeaturesOpened(false)
                    : setFeaturesOpened(true);
                }}
                className="text-sm flex gap-1 justify-center items-center underline hover:no-underline cursor-pointer"
              >
                {!featuresOpened ? (
                  <AiFillCaretRight />
                ) : (
                  <AiOutlineCaretDown />
                )}{" "}
                {featuresOpened ? "Hide" : "See"} features
              </p>

              {featuresOpened ? (
                <div className="overflow-hidden bg-white w-full sm:w-96 text-black rounded-lg flex flex-col items-start gap-6 p-6 text-xs font-bold">
                  {itemOfService.features.map((feature) => (
                    <div key={feature._id} className="flex gap-2 items-center">
                      <div className="bg-black rounded-full p-1 text-white">
                        <MdDone />
                      </div>
                      {feature.name}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center gap-16 w-full"
            >
              <div className="font-bold bg-white h-20 sm:w-96 p-6 w-full rounded-lg flex flex-col gap-2 justify-center items-center text-center">
                <p className="text-xs">Are you happy with this Total ?</p>
                <p className="text-md">
                  ${" "}
                  {optionSelected
                    ? itemOfService.options.map(
                        (option) =>
                          parseFloat(itemOfService.price) +
                          parseFloat(option.price)
                      )
                    : itemOfService.price}
                </p>
              </div>

              <div className="font-bold bg-white sm:w-96 p-6 w-full rounded-lg flex flex-col gap-2 justify-center items-center text-center">
                <div className="flex flex-col text-sm font-medium gap-4 w-full">
                  <input
                    onChange={handleInputChange}
                    name="firstName"
                    value={formData.firstName || ""}
                    type="text"
                    placeholder="First name"
                    className="border-2 border-slate-200 focus:outline-black rounded-md p-2"
                    required
                  />
                  <input
                    onChange={handleInputChange}
                    name="lastName"
                    value={formData.lastName || ""}
                    type="text"
                    placeholder="Last name"
                    className="border-2 border-slate-200 focus:outline-black rounded-md p-2"
                    required
                  />
                </div>
              </div>

              <button 
                onClick={() => {
                    setTimeout(() => {
                      setIsLetsTalkClicked(true)
                    }, 100);
                  }}
                  type="submit"
                className="cursor-pointer bg-black flex justify-center border-4 border-transparent hover:border-white overflow-hidden items-center w-full relative sm:w-96 h-20 rounded-lg text-white font-bold"
              >
                <video
                  className="absolute top-0 left-0 bottom-0 right-0"
                  autoPlay
                  muted
                  loop
                >
                  <source src={starBackground} type="video/mp4" />
                </video>
                  {
                    !isLetsTalkCliked ? (<p className="z-20">Let's talk</p>) : <ClipLoader color="#FFFFFF" />}
               </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
