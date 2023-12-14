"use client";
import React, { useState } from "react";
import ProfilePic from "../sidebar/ProfilePic";
import { format } from "timeago.js";
import {
  HandThumbUpIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";
import Comment from "./Comment";
const Post = ({
  username,
  imgUrl,
  location,
  likes,
  comments,
  postUrl,
  time,
  currentUserImgUrl,
}) => {
  const [isLike, SetIsLike] = useState(false);
  return (
    <div className="w-full h-auto p-6 rounded-lg bg-[#f9f9f9] mt-8 shadow-lg border">
      <div className="flex gap-5 mb-4">
        <ProfilePic imgUrl={imgUrl} height={48} width={48} />
        <div>
          <h1 className="font-semibold text-base tracking-wide font-poppins">
            {username}
          </h1>
          <h1 className="font-poppins text-[#3e4b54] tracking-wide text-sm">
            {format(new Date(time))}
            <span> • </span>
            <span className="font-medium">{location}</span>
          </h1>
        </div>
      </div>
      <div className="w-full h-80 overflow-hidden rounded-md">
        <img src={postUrl} className="w-full h-full object-cover" />
      </div>

      <div className="h-16 w-full border-t border-b  mt-12 p-6 flex justify-start items-center gap-12">
        <div className="flex items-center gap-3">
          <HandThumbUpIcon
            className={`h-8 w-8 ${
              isLike ? "text-[#487188]" : "text-[#c0c0c0]"
            } cursor-pointer`}
            onClick={() => {
              SetIsLike(!isLike);
            }}
          />
          <span>{likes} Likes</span>
        </div>

        <div className="flex items-center gap-3">
          <ChatBubbleBottomCenterIcon className="h-8 w-8 text-[#c0c0c0] cursor-pointer" />
          <span>{comments} Comments</span>
        </div>
      </div>

      <Comment imgUrl={currentUserImgUrl} />
    </div>
  );
};

export default Post;
