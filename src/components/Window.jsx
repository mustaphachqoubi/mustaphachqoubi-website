import {useState, useEffect} from 'react';

const Years = [2017, 2019, 2022];

export const HeWas = ({ children }) => {
  return (
    <div className="text-red-500 leading-loose">
      <div className="flex gap-2">
        <p className="text-purple-500">Const</p>
        <p className="text-yellow-500">HeWas</p>
        <p>=</p>
        <p className="text-white">({`{props}`})</p>
        <p>{'=>'}</p>
        <p className="text-white">{"{"}</p>
      </div>
      <div className="flex gap-2 mx-2">
      <p className="text-purple-500">return</p>
      <div className="text-white">(</div>
      </div>
      <div className="mx-4 text-green-500">
        {children}
      </div>
      <div className="text-white mx-2">)</div>
      <p className="text-white">{"};"}</p>
    </div>
  );
};

export const HeFound = ({ children }) => {
    return (
      <div className="text-red-500 leading-loose">
        <div className="flex gap-2">
          <p className="text-purple-500">Const</p>
          <p className="text-yellow-500">HeFound</p>
          <p>=</p>
          <p className="text-white">({`{props}`})</p>
          <p>{'=>'}</p>
          <p className="text-white">{"{"}</p>
        </div>
        <div className="flex gap-2 mx-2">
        <p className="text-purple-500">return</p>
        <div className="text-white">(</div>
        </div>
        <div className="mx-4 text-green-500 ">
          {children}
        </div>
        <div className="text-white mx-2">)</div>
        <p className="text-white">{"};"}</p>
      </div>
    );
  };

export const HeStartWorking = ({ children }) => {
    return (
      <div className="text-red-500 leading-loose">
        <div className="flex gap-2">
          <p className="text-purple-500">Const</p>
          <h3 className="text-yellow-500">HeStartWorking</h3>
          <h3>=</h3>
          <h3 className="text-white">()</h3>
          <h3>{'=>'}</h3>
          <h3 className="text-white">{"{"}</h3>
        </div>
        <div className="flex gap-2 mx-2">
        <p className="text-purple-500">return</p>
        <div className="text-white">(</div>
        </div>
        <div className="mx-4 text-green-500 ">
          {children}
        </div>
        <div className="text-white mx-2">)</div>
        <h3 className="text-white">{"};"}</h3>
      </div>
    );
  };



export const Window = () => {

const [selectedYearColor, setSelectedYearColor] = useState('bg-[#1e1e1e]');
const [activeYear, setActiveYear] = useState(0);

const handleSelectedYear = (index, value) => {
  setActiveYear(index)
};

useEffect(() => {
  activeYear === 0 && setSelectedYearColor('bg-[#171717]')
}, [activeYear])

  return (
    <div className="bg-[#171717] rounded-lg overflow-hidden w-full max-w-[50rem] h-96 relative">
      <div className="bg-[#1e1e1e] w-full h-10">
        <div className="flex gap-2 items-center h-full mx-4">
          <div className="bg-red-500 w-4 h-4 rounded-full"></div>
          <div className="bg-yellow-500 w-4 h-4 rounded-full"></div>
          <div className="bg-green-500 w-4 h-4 rounded-full"></div>
        </div>
      </div>

      <div className="bg-[#1e1e1e] w-full h-10">
        <div className={` flex justify-between items-center items-center h-full cursor-pointer`}>
          {Years.map((year, index) => (
             <div key={index} className={`${activeYear === index && selectedYearColor} text-gray-400 px-4 h-full flex justify-center items-center w-full`} onClick={() => {handleSelectedYear(index, year)}}>
                {year} 
             </div>
          ))}
        </div>
      </div>

      <div className="h-full p-4 text-sm md:text-md">
      {
      activeYear === 0 ? (
        <HeWas>
          - A Cyber Security guy;
            <br />
            - He was doing some web bug bounty;
            <br />
            - and it was fun for a while;
        </HeWas>
      ) : activeYear === 1 ? (
        <HeFound>
           But he Found his passion in web development, 
          especially
          <br />
          in Frontend development.
          <br />
          - and he decided to make creative web apps
          <br />
          that easy to use.
        </HeFound>
        ) : (
          <HeStartWorking>
            - at AIOX-Labs and DeepEcho in Rabat, morocco. <br />
            - and now he is trying to make products/apps <br />
            that he likes.
          </HeStartWorking>
        )
      }
      </div>
    </div>

)        
};
