import React from "react";
import Chatlist from "./Chatlist";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSend } from "react-icons/io5";

export const Home = () => {
  return (
    <div className="grid  grid-cols-12 ">
      <Chatlist />
      <div className="flex justify-center flex-col  col-span-9 max-h-screen">
        <h2 className="text-3xl font-moon text-center py-5">Blink Chat</h2>
        <div className="background h-full  w-full">
          <div className="w-full h-12  flex justify-between pr-5 items-center bg-pink-100 ">
            <div className="user-name h-full flex items-center gap-3 px-5">
              <div className="size-8 bg-red-500 rounded-full flex justify-between items-center"></div>
              <h3 className="text-xl font-moon text-start flex justify-between items-center  ">
                User Name
              </h3>
            </div>
            <BsThreeDotsVertical className="inline-block text-2xl float-right mr-5 mt-2" />
          </div>
          <div className="chat-box flex flex-col gap-2 justify-end h-[calc(100vh-200px)] overflow-y-scroll px-5 py-3 ">
            <div className="message request flex items-center">
              <div className="size-10 bg-red-500 rounded-full"></div>
              <span className="msg">Hello</span>
            </div>
            <div className="message request flex items-center">
              <div className="size-10 bg-red-500 rounded-full"></div>
              <span className="msg">How are you?</span>
            </div>
            <div className="message response flex items-center">
              <div className="size-10 bg-red-500 rounded-full"></div>
              <span className="msg">I am fine</span>
            </div>
            <div className="message response flex items-center">
              <div className="size-10 bg-red-500 rounded-full"></div>
              <span className="msg">What about you?</span>
            </div>
            <div className="message request flex items-center">
              <div className="size-10 bg-red-500 rounded-full"></div>
              <span className="msg">I am also fine</span>
            </div>
          </div>
          <div className="w-full flex px-5 justify-center items-center ">
            <div className="msg-input w-full flex justify-between items-center pr-5 rounded-full bg-gray-300">
              <input
                type="text"
                className="w-full h-10 rounded-full px-5 outline-none "
                placeholder="Type a message..."
              />
              <div className="">
                <IoSend className="text-2xl  cursor-pointer " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
