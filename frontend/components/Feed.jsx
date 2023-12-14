import React from "react";
import SearchBar from "./feed/SearchBar";
import { posts } from "../lib/dummy";
import Post from "./feed/Post";

const Feed = () => {
  return (
    <div className="h-full flex-[0.6] bg-[#ffffff] flex flex-col p-12 pb-0 overflow-y-scroll scrollbar-hide">
      <SearchBar />
      <div>
        {posts.map((item, index) => (
          <Post
            key={index}
            comments={item.comments}
            likes={item.likes}
            imgUrl={item.imgUrl}
            location={item.location}
            postUrl={item.postUrl}
            username={item.username}
            time={item.time}
            currentUserImgUrl={
              "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
