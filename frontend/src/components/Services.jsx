import { BsLightningCharge, BsLightningChargeFill } from "react-icons/bs";
import { SiStarship } from "react-icons/si";
import { MdDone } from "react-icons/md";
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    const handleServices = async () => {
      const response = await fetch('http://localhost:4000/api/services/')
      const data = await response.json() 
      if(response.ok){
        setServices(data)
      }
    }
    handleServices()
  }, [])

  return (
    <div className="flex flex-col justify-center items-center p-10 gap-20 pt-36 max-w-[1536px] mx-auto">
      {
         services.length > 0 ? services.map((service) => (
          <div key={service._id} className="flex flex-col gap-8 text-sm w-full">
            <h1 className="font-bold text-lg ">{service.title}</h1>
            <div className="flex flex-wrap gap-10 justify-center items-center">
              {service.items?.map((item) => (
                <div
                  key={item._id}
                  className={`${
                    item.number === "2" ? "w-80 h-[29rem]" : "w-72 h-[27rem]"
                  } flex flex-col gap-5 p-4 rounded-lg ${
                    item.number === "2" ? "bg-black text-white" : "bg-white" 
                  } relative`}
                >
                 <div>
                  <div className="flex justify-between w-full h-20 ">
                    <div className="flex flex-col gap-2">
                      <p className="text-xs font-bold">{item.title}</p>
                        {item.deadline ? (
                      <div className="text-xl font-bold flex flex-col md:flex-row">
                          <p>{item.price}&nbsp;/&nbsp;</p>{" "}
                          <p>in {item.deadline} Days</p>  
                          </div>
                        ) : (
                          <div className="text-xl font-bold flex flex-col md:flex-row">
                          <p>$ {item.price}</p>
                          </div>
                        )}
                    </div>
                    <div className="flex justify-center items-center bg-black text-white text-lg w-10 h-10 rounded-full border-2 border-white absolute -right-5 md:static ">
                      {item.number === "1" ? (
                        <BsLightningCharge />
                      ) : item.number === "2" ? (
                        <BsLightningChargeFill />
                      ) : (
                        <SiStarship />    
                      )}
                    </div>
                  </div>
  
                  <div className="text-xs tracking-widest flex flex-col gap-4 overflow-auto h-40 snap-y ">
                    {item.features?.map((feature) => (
                    <div key={feature._id} className="flex gap-2 items-center"><div className="bg-black text-white p-1 rounded-full"><MdDone /></div> {feature.name}</div>
                    ))}
                  </div>
                 </div> 
  
                  {item.options.length > 0 ? item.options.map(option => (
                    <div key={option._id}>
                  <hr />
  
                  <div className={`flex justify-between items-center ${item.number === "2" ? 'py-4' : 'py-2'} text-xs `}>
                    <div>
                      <p> {option.name}</p>
                      <p className="font-bold">+ ${option.price}</p>
                    </div>
  
                    <div className={`${item.number === "2" ? 'bg-gray-300/30 text-slate-300' : 'bg-slate-200'} text-gray-500 py-1 px-2 rounded-full`}>
                      Option
                    </div>
                  </div>
  
                  <hr />
                  </div>
                  )) : (
                        <div> 
                  <hr />
  
                  <div className={`flex justify-between items-center ${item.number === "2" ? 'py-4' : 'py-2'} text-xs `}>
                    <div>
                      <p> There is no other options </p>
                    </div>
  
                    <div className={`${item.number === "2" ? 'bg-gray-300/30 text-slate-300' : 'bg-slate-200'} text-gray-500 py-1 px-2 rounded-full`}>
                      Option
                    </div>
                  </div>
  
                  <hr />
                  </div>
  
                  )} 
                   <div> 
                    <Link to={`/${service._id}/items/${item._id}`}>
                    <button className="p-2 w-full border-white border-2 rounded-md hover:text-black hover:bg-white hover:border-black bg-black text-white">I Need This</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )) : <div className="h-[75vh] font-bold flex items-center justify-center w-full">
        Loading...
      </div> 
      }
    </div>
  );
};
