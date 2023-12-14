import React from "react";
import Login from "../../../components/auth/Login";

const Page = () => {
  return (
    <div className="h-screen w-screen  flex justify-center" style={{'background-image' : 'linear-gradient(to bottom, #a18cd1 0%, #fbc2eb 100%)'}}>
      <div className="max-w-[1640px] w-full h-full flex justify-center items-center">
        <Login />
      </div>
    </div>
  );
};

export default Page;
