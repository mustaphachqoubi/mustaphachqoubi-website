export  const features = [
    { id: 1, name: "Minimalistic design" },
    { id: 2, name: "Unique design" },
    { id: 3, name: "3D graphics" },
    { id: 4, name: "Animations" },
    { id: 5, name: "test" },
];

export const services = [
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
          { id: 1, name: "Minimalistic design" },
          { id: 4, name: "Animations" },
        ]
        },
        { id: 2, name: "Complex landing page", price: 1000, deadline: 20, features: [

        { id: 2, name: "Unique design" },
        { id: 3, name: "3D graphics" },

        ]
},
        { id: 3, name: "Unachievable", price: ' +3000', deadline: 30, features: [...features]},
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
