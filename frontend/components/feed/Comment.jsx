import React, { useState } from "react";
import ProfilePic from "../sidebar/ProfilePic";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const Comment = ({ imgUrl }) => {
  const [comment, setComment] = useState("");
  return (
    <div className="h-14 w-full flex gap-3 justify-between items-center mt-4">
      <div>
        <ProfilePic imgUrl={imgUrl} height={48} width={48} />
      </div>
      <div className=" w-full h-full p-2 flex">
        <div className=" flex-1 bg-[#ececec] overflow-hidden rounded-lg">
          <input
            type="text"
            placeholder="write a comment"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
            className="w-full h-full px-3 overflow-ellipsis font-poppins text-sm tracking-wide outline-none bg-inherit"
          />
        </div>
      </div>
      <div className="flex justify-center items-center cursor-pointer text-[#c0c0c0]">
        <PaperAirplaneIcon className="h-6 w-6" />
      </div>
    </div>
  );
};

export default Comment;
