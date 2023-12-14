"use client";
import React, { useState } from "react";
import ProfileList from "./ProfileList";


const ProfileNav = () => {
  const [selected, setSelected] = useState("Timeline");
  return (
    <div className="w-full h-20 rounded-lg bg-[#e3e3e3] px-12">
      <div className="flex h-full justify-between items-center">
        <ProfileList
          selected={selected}
          setSelected={setSelected}
          value={"Timeline"}
        />

        <ProfileList
          selected={selected}
          setSelected={setSelected}
          value={"About"}
        />
        <ProfileList
          selected={selected}
          setSelected={setSelected}
          value={"Friends"}
        />
        <ProfileList
          selected={selected}
          setSelected={setSelected}
          value={"Photos"}
        />

        <ProfileList
          selected={selected}
          setSelected={setSelected}
          value={"Videos"}
        />
      </div>
    </div>
  );
};

export default ProfileNav;
