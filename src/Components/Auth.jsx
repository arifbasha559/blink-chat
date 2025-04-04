import { IoLockClosedOutline } from "react-icons/io5";

import { FiAtSign, FiEye, FiEyeOff, FiUser } from "react-icons/fi";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function Auth() {
  const [pass, setPass] = useState(false);
  const [sign, setSign] = useState(false);

  return (
    <div className="relative h-screen flex justify-center items-center w-screen bg-gray-200">
      <form className="flex flex-col gap-3 mx-20 bg-white text-black p-8 w-[450px] rounded-2xl font-sans shadow-[0px_0px_15px_0px] shadow-black">
        <h2 className="text-center text-2xl font-bold ">
          {sign ? "Sign Up" : "Sign In"}
        </h2>
        {sign ? (
          <div className="flex flex-col">
            <label className=" font-semibold">Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-blue-500">
              <FiUser className="w-5 h-5" />
              <input
                type="text"
                autoComplete="true"
                className="ml-2 w-full border-none outline-none "
                placeholder="Enter your Name"
              />
            </div>
          </div>
        ) : null}
        <div className="flex flex-col">
          <label className=" font-semibold">Email</label>
          <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-blue-500">
            <FiAtSign className="w-5 h-5" />
            <input
              type="email"
              autoComplete="true"
              className="ml-2 w-full border-none outline-none "
              placeholder="Enter your Email"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className=" font-semibold">Password</label>
          <div className="flex items-center border border-gray-300 rounded-lg h-12 px-3 transition focus-within:border-blue-500">
            <IoLockClosedOutline className="size-5 cursor-pointer" />
            <input
              {...(pass ? { type: "text" } : { type: "password" })}
              className="ml-2 w-full border-none outline-none"
              placeholder="Enter your Password"
            />
            {pass ? (
              <FiEyeOff
                onClick={() => {
                  setPass(!pass);
                }}
                className="cursor-pointer w-5 h-5"
              />
            ) : (
              <FiEye
                onClick={() => {
                  setPass(!pass);
                }}
                className="cursor-pointer w-5 h-5"
              />
            )}
          </div>
        </div>
        <div className="flex justify-between items-center text-sm ">
          <div className="flex items-center gap-2">
            <input id="rememberMe" type="checkbox" />
            <label htmlFor="rememberMe" className="cursor-pointer">
              Remember me
            </label>
          </div>
          <span className="text-blue-500 cursor-pointer hover:underline underline-offset-2">
            Forgot password?
          </span>
        </div>
        <button className="w-full bg-gray-900 text-white font-medium text-lg rounded-lg h-12 mt-5 hover:bg-gray-800">
          {sign ? "Sign Up" : "Sign In"}
        </button>
        {sign ? (
          <p className="text-center text-sm ">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => {
                setSign(!sign);
              }}
              className="text-blue-500 cursor-pointer hover:underline underline-offset-2"
            >
              Sign In
            </button>
          </p>
        ) : (
          <p className="text-center text-sm ">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => {
                setSign(!sign);
              }}
              className="text-blue-500 cursor-pointer hover:underline underline-offset-2"
            >
              Sign Up
            </button>
          </p>
        )}
        <p className="text-center text-sm ">Or With</p>
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center border border-gray-300 rounded-lg h-12 gap-2 hover:border-blue-500">
            <FcGoogle className="w-5 h-5" />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center border border-gray-300  rounded-lg h-12 gap-2 hover:border-blue-500">
            <FaApple className="w-5 h-5" />
            Apple
          </button>
        </div>
      </form>
    </div>
  );
}

export default Auth;
