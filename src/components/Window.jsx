export const HeWas = ({ children }) => {
  return (
    <div className="text-red-500 leading-loose">
      <div className="flex gap-2">
        <h3 className="text-purple-500">Const</h3>
        <h3 className="text-yellow-500">HeWas</h3>
        <h3>=</h3>
        <h3 className="text-white">({`{props}`})</h3>
        <h3>{'=>'}</h3>
        <h3 className="text-white">{"{"}</h3>
      </div>
      <div className="flex gap-2 mx-2">
      <di className="text-purple-500">return</di>
      <div className="text-white">(</div>
      </div>
      <div className="mx-4 text-green-500">
        {children}
      </div>
      <div className="text-white mx-2">)</div>
      <h3 className="text-white">{"};"}</h3>
    </div>
  );
};

export const HeFound = ({ children }) => {
    return (
      <div className="text-red-500 leading-loose">
        <div className="flex gap-2">
          <h3 className="text-purple-500">Const</h3>
          <h3 className="text-yellow-500">HeFound</h3>
          <h3>=</h3>
          <h3 className="text-white">({`{props}`})</h3>
          <h3>{'=>'}</h3>
          <h3 className="text-white">{"{"}</h3>
        </div>
        <div className="flex gap-2 mx-2">
        <di className="text-purple-500">return</di>
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

export const Window = ({ children }) => {
  return (
    <div className="bg-[#171717] rounded-lg overflow-hidden w-96 h-80 relative">
      <div className="bg-[#1e1e1e] w-full h-10">
        <div className="flex gap-2 items-center h-full mx-4">
          <div className="bg-red-500 w-4 h-4 rounded-full"></div>
          <div className="bg-yellow-500 w-4 h-4 rounded-full"></div>
          <div className="bg-green-500 w-4 h-4 rounded-full"></div>
        </div>
      </div>

      <div className="h-full p-4">{children}</div>
    </div>
  );
};
