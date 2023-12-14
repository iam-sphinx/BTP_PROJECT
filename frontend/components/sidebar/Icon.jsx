import React from "react";

const Icon = ({ Hero, setSelected, selected, name }) => {
  return (
    <div className="h-12 w-12 rounded-md bg-[#75609a] flex justify-center items-center cursor-pointer">
      <div
        className={`h-12 w-12 rounded-md bg-[#75609a] flex justify-center items-center cursor-pointer ${
          selected == name ? "bg-[#efe9ee]" : "bg-[#75609a]"
        }`}
        onClick={() => {
          setSelected(name);
        }}
      >
        <Hero
          name={name}
          className={` h-9 w-9 hover:scale-125  transition duration-200 ease-in-out ${
            selected == name ? "text-[#75609a]" : "text-white"
          }`}
        />
      </div>
    </div>
  );
};

export default Icon;
