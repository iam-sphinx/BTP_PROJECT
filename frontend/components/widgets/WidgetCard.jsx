import React from "react";
import LastSeen from "./LastSeen";

const WidgetCard = ({ title }) => {
  return (
    <div className="w-full h-64 bg-[#745f98] rounded-lg flex flex-col pb-1">
      <div className="flex justify-between p-2">
        <h1 className="font-medium font-poppins tracking-normal text-[#dad2df]">
          {title}
        </h1>
        <div className="text-sm font-poppins text-[#dad2df] cursor-pointer">
          See All
        </div>
      </div>

      <div className="overflow-x-hidden overflow-y-scroll scrollbar-hide flex flex-col gap-3">
        <LastSeen
          time={"2023-11-25"}
          name={"John Doe"}
          imgUrl={
            "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />

        <LastSeen
          time={"2023-11-25"}
          name={"John Doe"}
          imgUrl={
            "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <LastSeen
          time={"2023-11-25"}
          name={"John Doe"}
          imgUrl={
            "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <LastSeen
          time={"2023-11-25"}
          name={"John Doe"}
          imgUrl={
            "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <LastSeen
          time={"2023-11-25"}
          name={"John Doe"}
          imgUrl={
            "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <LastSeen
          time={"2023-11-25"}
          name={"John Doe"}
          imgUrl={
            "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
      </div>
    </div>
  );
};

export default WidgetCard;
