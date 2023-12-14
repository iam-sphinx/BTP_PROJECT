import React from "react";
import ProfilePic from "../sidebar/ProfilePic";
import { format } from "timeago.js";
const LastSeen = ({ name, time, imgUrl }) => {
  return (
    <div className="flex gap-5 items-center px-3">
      <ProfilePic imgUrl={imgUrl} height={48} width={48} />
      <div className="flex flex-col">
        <span className="text-lg text-[#dad2df] font-semibold">{name}</span>
        <span className="text-xs font-medium text-[#b7aebe]">
          {format(new Date(time))}
        </span>
      </div>
    </div>
  );
};

export default LastSeen;
