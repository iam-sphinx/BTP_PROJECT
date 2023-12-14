import React from "react";
import HeroImage from "./HeroImage";
import ProfilePic from "../sidebar/ProfilePic";

const HeroSection = ({ imgUrl, profileUrl, userName }) => {
  return (
    <div className="w-full px-12">
      <div className="relative">
        <HeroImage imgUrl={imgUrl} />
        <div className="absolute top-[65%] left-[5%] flex items-center gap-10">
          <ProfilePic imgUrl={profileUrl} height={164} width={164} />
          <h1 className="font-bold font-poppins tracking-wider text-3xl text-white ">
            {userName}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
