import React from "react";
import { BiMessageAdd, BiSearchAlt } from "react-icons/bi";

const Chatlist = () => {
  return (
    <div className="chat-list max-h-screen  col-span-3  bg-pink-100">
      <div className="w-full h-28 px-5">
        <div className="text-2xl font-moon text-start flex justify-between items-center py-5 ">
          <div className="flex justify-between gap-3 items-center">
            <div className="size-10 bg-red-400 rounded-full">
              {/* img */}
            </div>
          <h2>Chat</h2>
          </div>
          
          <BiMessageAdd className="inline-block text-2xl" />
        </div>
        <form className="w-full border border-gray-300 bg-gray-300 rounded-lg px-3 py-1 flex items-center gap-2 ">
          <label htmlFor="search">
            <BiSearchAlt className=" text-gray-500 " />
          </label>
          <input
            type="search"
            name=""
            className="w-full text-gray-500  outline-none"
            id="search"
          />
        </form>
      </div>
      <ul className="space-y-4 overflow-y-scroll h-[calc(100vh-112px)] relative ">
        <div className="sticky   w-full h-10 top-0 "></div>
        {[1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
          <li
            key={item}
            className="p-4 rounded-lg shadow-sm flex justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold">Chat Room 1</h3>
              <p className="text-sm text-gray-600">
                Last message: Hello there!
              </p>
            </div>
            <div className="flex flex-col items-end justify-betw">
              <p className="text-xs text-gray-500">{"Today"}</p>
              <div className="text-xs size-6 bg-green-600 text-white rounded-full text-center flex justify-center items-center">
                11
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chatlist;
