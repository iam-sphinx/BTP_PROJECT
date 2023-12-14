import React from "react";
import WidgetCard from "./widgets/WidgetCard";

const Widgets = () => {
  return (
    <div className="flex-[0.2] bg-[#826da8] pt-12 px-3 gap-6 flex flex-col">
      <WidgetCard title={"stories"} />
      <WidgetCard title={"contacts"} />
    </div>
  );
};

export default Widgets;
