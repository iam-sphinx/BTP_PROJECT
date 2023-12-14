import React from "react";

const HeroImage = ({ imgUrl }) => {
  return (
    <div className="w-full h-72 mt-6 bg-black overflow-hidden rounded-2xl">
      <img src={imgUrl} className="w-full h-full object-cover" />
    </div>
  );
};

export default HeroImage;
