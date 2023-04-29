import { BsLightningCharge, BsLightningChargeFill } from "react-icons/bs";
import { SiStarship } from "react-icons/si";
import { MdDone } from 'react-icons/md'

export const Services = () => {
  const services = [
    {
      id: 1,
      servicesTitle: "Landing Pages",
      services: [
        {
          id: 1,
          name: "Simple landing page",
          price: 500,
          deadline: 10,
          features: [
            {id: 1, name: 'Minimalistic design'}, 
            {id: 2, name: 'Unique design'}, 
            {id: 3, name: '3D graphics'}, 
          ] 
        },
        { id: 2, name: "Complex landing page", price: 1000, deadline: 20 },
        { id: 3, name: "Unachievable", price: 3000, deadline: 30 },
      ],
    },
    {
      id: 2,
      servicesTitle: "Portfolio Websites",
      services: [
        { id: 1, name: "Portfolio One", price: 899, pricePhour: 5 },
        { id: 2, name: "Portfolio two", price: 999, pricePhour: 6 },
        { id: 3, name: "portfolio three", price: 1999, pricePhour: 7 },
      ],
    },
  ];
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
                } flex flex-col gap-4 p-4 border-4 hover:border-[#8eddff] border-transparent rounded-lg ${
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

                <div className="text-xs tracking-widest flex flex-col gap-4">{s.features?.map(f => (
                <div key={f.id} className="flex gap-2">
                  {f.name}
                </div>
                ))}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
