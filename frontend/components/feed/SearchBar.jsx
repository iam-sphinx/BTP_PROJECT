"use client";
import React, { useState } from "react";
import ProfilePic from "../sidebar/ProfilePic";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="w-full h-20 rounded-md bg-[#e3e3e3] px-8">
      <div className="flex h-full w-full gap-3 items-center">
        <div>
          <ProfilePic
            height={48}
            width={48}
            imgUrl="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="py-3 w-full h-full">
          <div className="w-full h-full  bg-[#ffffff] rounded-md overflow-hidden p-2 px-8">
            <input
              type="text"
              className="h-full w-full outline-none overflow-ellipsis tracking-wide"
              placeholder="What's in your Mind!"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
