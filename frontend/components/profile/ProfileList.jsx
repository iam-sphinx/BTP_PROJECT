import React from "react";

const ProfileList = ({ selected, value, setSelected }) => {
  return (
    <div
      className={` font-poppins tracking-wider cursor-pointer ${
        selected === value ? "font-extrabold" : "font-medium"
      }`}
      onClick={() => {
        setSelected(value);
      }}
    >
      <h1>{value}</h1>
    </div>
  );
};

export default ProfileList;
