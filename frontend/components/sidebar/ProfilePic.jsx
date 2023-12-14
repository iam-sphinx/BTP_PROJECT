import React from "react";

const ProfilePic = ({ height, width, imgUrl }) => {
  return (
    <div
      className="bg-white rounded-full border-2 border-[#f6f9f7] overflow-hidden shadow-lg cursor-pointer"
      style={{ height: height, width: width }}
    >
      <img src={imgUrl} className="w-full h-full object-cover" />
    </div>
  );
};

export default ProfilePic;
