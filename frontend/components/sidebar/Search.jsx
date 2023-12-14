import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");

  return (
    <div className="w-full h-[40px] rounded-lg bg-[#e3e3e3] p-2 mt-14">
      <div className="flex h-full w-full gap-3">
        <MagnifyingGlassIcon className="h-6 w-6 text-[#b78fef] cursor-pointer" />
        <input
          type="text"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          className="w-full h-full bg-inherit text-xl outline-none "
          placeholder="Search"
        ></input>
      </div>
    </div>
  );
};

export default Search;
