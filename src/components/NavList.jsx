import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const NavList = () => {
  const [selectedId, setSelectedId] = useState(1);
  const [bg, setBg] = useState("bg-[#e5ac73]");

  const List = [
    { id: 1, list: "Home" },
    { id: 2, list: "Contact me" },
    { id: 3, list: "Services" },
  ];

  const location = useLocation();

  const handleSelectedList = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="z-50 bg-[#e5ac73]/50 backdrop-blur border-2 border-black rounded-md overflow-hidden w-40 md:w-53">
      {location.pathname !== "/"
        ? List.map((list) =>
            list.list === "Home" ? (
              <Link to="/">
                <div
                  onClick={() => {
                    handleSelectedList(list.id);
                  }}
                  key={list.id}
                  className={`${selectedId === list.id ? bg : null} ${
                    list.id === List.length ? "" : "border-b-2 border-black"
                  } cursor-pointer h-10 flex justify-start items-center px-6 font-bold text-xs tracking-wide`}
                >
                  <h3>{list.list}</h3>
                </div>
              </Link>
            ) : list.list === "Contact me" ? (
              ""
            ) : (
              <Link to="/services">
                <div
                  onClick={() => {
                    handleSelectedList(list.id);
                  }}
                  key={list.id}
                  className={`${selectedId === list.id ? bg : null} ${
                    list.id === List.length ? "" : "border-b-2 border-black"
                  } cursor-pointer h-10 flex justify-start items-center px-6 font-bold text-xs tracking-wide`}
                >
                  <h3>{list.list}</h3>
                </div>
              </Link>
            )
          )
        : List.map((list) =>
            list.list === "Home" ? (
              <Link to="/">
                <div
                  onClick={() => {
                    handleSelectedList(list.id);
                  }}
                  key={list.id}
                  className={`${selectedId === list.id ? bg : null} ${
                    list.id === List.length ? "" : "border-b-2 border-black"
                  } cursor-pointer h-10 flex justify-start items-center px-6 font-bold text-xs tracking-wide`}
                >
                  <h3>{list.list}</h3>
                </div>
              </Link>
            ) : list.list === "Contact me" ? (
              <a href="#contactme">
                <div
                  onClick={() => {
                    handleSelectedList(list.id);
                  }}
                  key={list.id}
                  className={`${selectedId === list.id ? bg : null} ${
                    list.id === List.length ? "" : "border-b-2 border-black"
                  } cursor-pointer h-10 flex justify-start items-center px-6 font-bold text-xs tracking-wide`}
                >
                  <h3>{list.list}</h3>
                </div>
              </a>
            ) : (
              <Link to="/services">
                <div
                  onClick={() => {
                    handleSelectedList(list.id);
                  }}
                  key={list.id}
                  className={`${selectedId === list.id ? bg : null} ${
                    list.id === List.length ? "" : "border-b-2 border-black"
                  } cursor-pointer h-10 flex justify-start items-center px-6 font-bold text-xs tracking-wide`}
                >
                  <h3>{list.list}</h3>
                </div>
              </Link>
            )
          )}
    </div>
  );
};
