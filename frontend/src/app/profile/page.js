import React from "react";
import Navbar from "../../../components/Navbar";
import HeroSection from "../../../components/profile/HeroSection";
import About from "../../../components/profile/About";
import ProfileNav from "../../../components/profile/ProfileNav";
import { posts } from "../../../lib/dummy";
import Post from "../../../components/feed/Post";
const page = () => {
  return (
    <div className="h-screen  bg-[#826da8]">
      <div className="max-w-[1640px] w-full h-auto bg-white flex flex-col">
        <Navbar
          imgUrl={
            "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />

        <HeroSection
          imgUrl={
            "https://plus.unsplash.com/premium_photo-1664302009055-fddd8825a83d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          profileUrl={
            "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          userName={"John Doe"}
        />

        <div className="w-full px-12 flex mt-24 gap-6">
          <div className="flex-[0.2] flex-nowrap flex flex-col gap-8">
            <About
              edLocation={"Bangalore"}
              location={"Chennai"}
              education={"Kanpur"}
              occupation={"Softare Engineer"}
            />
            <About
              edLocation={"Bangalore"}
              location={"Chennai"}
              education={"Kanpur"}
              occupation={"Softare Engineer"}
            />
          </div>
          <div className="flex flex-[0.8] flex-col">
            <ProfileNav />
            <div>
              {posts.map((item, idx) => (
                <Post
                  key={idx}
                  comments={item.comments}
                  imgUrl={item.imgUrl}
                  likes={item.likes}
                  location={item.location}
                  postUrl={item.postUrl}
                  time={item.time}
                  username={item.username}
                  currentUserImgUrl={
                    "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
