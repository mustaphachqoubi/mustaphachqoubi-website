import { BsLightningCharge, BsLightningChargeFill } from "react-icons/bs";
import { SiStarship } from "react-icons/si";
import { MdDone, MdClose } from "react-icons/md";
import { useState } from 'react'
import { services, features } from '../assets/dummy.js'

export const Services = () => {
  const [featuresNumber, setFeaturesNumber] = useState(4)
  const [showMoreOrLess, setShowMoreOrLess] = useState('more')
  return (
    <div className="flex flex-col justify-center items-center p-10 gap-20 pt-36">
      {services.map((service) => (
        <div key={service.id} className="flex flex-col gap-8 text-sm w-full">
          <h1 className="font-bold text-lg ">{service.servicesTitle}</h1>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            {service.services.map((s) => (
              <div
                key={s.id}
                className={`${
                  s.id === 2 ? "w-80 h-[29rem]" : "w-72 h-[27rem]"
                } flex flex-col gap-5 p-4 rounded-lg ${
                  s.id === 2 ? "bg-[#131313] text-white" : "bg-white" 
                }`}
              >
                <div className="flex justify-between w-full ">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-bold">{s.name}</p>
                    <p className="text-xl font-bold flex flex-col md:flex-row">
                      <div>${s.price}&nbsp;/&nbsp;</div>{" "}
                      <div> {s.deadline} Days</div>
                    </p>
                  </div>
                  <div className="flex justify-center items-center bg-[#131313] text-white text-lg w-10 h-10 rounded-full border-2 border-white">
                    {s.id === 1 ? (
                      <BsLightningCharge />
                    ) : s.id === 2 ? (
                      <BsLightningChargeFill />
                    ) : (
                      <SiStarship />
                    )}
                  </div>
                </div>

                <div className="text-xs tracking-widest flex flex-col gap-4 overflow-auto h-40 snap-y">
                  {features.slice(0, featuresNumber).map((f) => (
                    <div key={f.id} className="flex gap-2 items-center">
                    <div className=" bg-[#131313] p-1 rounded-full text-white ">
                        {s.fullFeatures === true ? <MdDone /> : s.features?.map((feature) => feature.name === f.name ? (
                        <MdDone />
                        ) : (<MdClose />)
                        )}
                    </div>
                    {f.name}
                  </div>
                  ))}
                  <p className="cursor-pointer " onClick={() => {
                    showMoreOrLess === 'more' ? setFeaturesNumber(features.length) : setFeaturesNumber(4);
                    showMoreOrLess === 'more' ? setShowMoreOrLess('less') : setShowMoreOrLess('more')
                  }}>Show {showMoreOrLess}</p>
                </div>

                <div>
                <hr />

                <div className={`flex justify-between items-center ${s.id === 2 ? 'py-4' : 'py-2'} text-xs`}>
                  <div>
                    <p>option</p>
                    <p className="font-bold">price</p>
                  </div>

                  <div className="bg-slate-200 text-gray-500 py-1 px-2 rounded-full">
                    Options
                  </div>
                </div>

                <hr />
                </div>

                <div> 
                  <button className="p-2 w-full border-white border-2 rounded-md hover:text-[#131313] hover:bg-white hover:border-[#131313] bg-[#131313] text-white">I Need This</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
