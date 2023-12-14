"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ProfilePic from "./sidebar/ProfilePic";

const Navbar = ({ imgUrl }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  return (
    <div className="h-16 bg-[#826da8] w-full flex items-center justify-between px-12">
      <div className="flex h-full items-center w-full gap-12">
        <h1
          className="font-poppins text-xl text-[#eee7f1] font-medium tracking-wide cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          MetaMate
        </h1>
        <div className="h-9 w-96 bg-[#e3e3e3] rounded-md flex items-center px-2 gap-3">
          <MagnifyingGlassIcon className="w-5 h-5" />
          <div className="w-full h-full overflow-hidden">
            <input
              type="text"
              className="w-full h-full bg-inherit text-ellipsis outline-none"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <ProfilePic height={48} width={48} imgUrl={imgUrl} />
      </div>
    </div>
  );
};

export default Navbar;
