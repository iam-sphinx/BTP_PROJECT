"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newData = { ...formData, [name]: value };
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/");

    console.log(formData);
  };

  const handleSignup = () => {
    router.push("/signup");
  };
  return (
    <div className="h-[600px] w-[400px] bg-[rgba(204,203,208,1)] rounded-[20px] p-6 flex flex-col justify-evenly border-gray-400 border">
      <div>
        <h1 className="font-semibold text-2xl font-poppins text-gray-500 text-center">
          Welcome Back
        </h1>
        <h1 className="font-medium mt-3 font-poppins text-[#373636] text-center">
          The Faster you fill up the faster you enjoy!
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <h1 className="font-medium mt-6 mb-3 font-poppins text-[#373636]  ">
          Email
        </h1>
        <div className="w-full h-10 border-[#d7d7da] border rounded-lg overflow-hidden">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="font-medium text-[#373636] w-full h-full bg-inherit text-ellipsis outline-none px-6 text-sm"
          />
        </div>

        <h1 className="font-medium mt-6 mb-3 font-poppins text-[#373636] ">
          Password
        </h1>
        <div className="w-full h-10 border-[#d7d7da] border rounded-lg overflow-hidden flex gap-3">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="font-medium text-[#373636] w-full h-full bg-inherit text-ellipsis outline-none px-6 text-sm"
          />
        </div>
        <div
          onClick={() => {
            setShowPass(!showPass);
          }}
          className=" ml-2 text-[#373636] mt-6 flex cursor-pointer"
        >
          {showPass ? (
            <EyeIcon className="w-6 h-6" />
          ) : (
            <EyeSlashIcon className="w-6 h-6" />
          )}
        </div>

        <button
          type="submit"
          className="w-full h-12 bg-[#897ea7] rounded-[20px] mt-6 text-white font-semibold tracking-wide"
        >
          Sign In
        </button>
      </form>
      <h1 className="font-normal font-poppins text-[#373636] tracking-wider">
        Didn't have an account?
        <span
          className="cursor-pointer hover:text-blue-500 font-medium tracking-lighter ml-3"
          onClick={handleSignup}
        >
          Sign up
        </span>
      </h1>
    </div>
  );
};

export default Login;
