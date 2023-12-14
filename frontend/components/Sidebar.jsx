"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Search from "./sidebar/Search";
import ProfilePic from "./sidebar/ProfilePic";
import NavIcon from "./sidebar/NavIcon";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="flex-[0.2] h-full bg-[#826da8] p-4 px-8 flex flex-col">
      <div className="w-full h-full flex flex-col">
        <h1 className="text-3xl font-semibold font-poppins text-[#e3e3e3] text-center mt-6 cursor-pointer">
          MetaMate
        </h1>

        <Search />
        <div
          className="flex justify-center items-center mt-12"
          onClick={() => {
            router.push("/profile");
          }}
        >
          <ProfilePic
            height={128}
            width={128}
            imgUrl="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>

        <h1 className="font-medium text-2xl -tracking-tighter text-[#e8e1f2] text-center mt-4">
          John Doe
        </h1>
        <div className="flex justify-center items-center mt-6">
          <NavIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
