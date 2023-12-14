import React from "react";
import {
  MapPinIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
const About = ({ location, occupation, education, edLocation }) => {
  return (
    <div className="w-full h-auto rounded-lg bg-[#e3e3e3] shadow-lg p-2 text-[#868686]">
      <div className="w-full h-full flex flex-col gap-3">
        <h1 className="text-bold tracking-wide font-poppins text-2xl text-black mb-2">
          About
        </h1>

        <div className="w-full flex gap-3">
          <MapPinIcon className="h-4 w-4" />
          <h1 className="font-medium font-poppins text-sm">
            lives in <span>{location}, India</span>
          </h1>
        </div>

        <div className="w-full flex gap-3">
          <BriefcaseIcon className="h-4 w-4" />
          <h1 className="font-medium font-poppins text-sm">
            {occupation} <span>{location}, India</span>
          </h1>
        </div>

        <div className="w-full flex gap-3">
          <AcademicCapIcon className="h-4 w-4" />
          <h1 className="font-medium font-poppins text-sm">
            Studied at <span>{edLocation}, India</span>
          </h1>
        </div>

        <div className="w-full flex gap-3">
          <BuildingLibraryIcon className="h-4 w-4" />
          <h1 className="font-medium font-poppins text-sm">
            From <span>{location}, India</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
