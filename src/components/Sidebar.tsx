/* eslint-disable @next/next/no-img-element */
// components/layout/Sidebar.tsx
import { FC } from "react";
import { FiSun } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";


interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed lg:static inset-y-0 left-0 w-64 side transform 
        transition-transform duration-200 ease-in-out z-30 
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full">
          <div className=" py-5 ">
            <img src="/images/Logo.png" alt="" className=" px-4 h-[32px] mx-auto"  />
          </div>
          <nav className="flex-1 overflow-y-auto py-2 space-y-2  ">
            <a
              href="#"
              className="flex justify-center items-center space-x-3 bg-[#101114] rounded-lg mx-2 py-2 "
            >
              <span className="text-xl">
             <IoAdd/>
              </span>
              <span className="font-sf text-[#ffffff] font-bold">New Agents</span>
            </a>
            <a
              href="#"
              className="flex   gap-2 items-center  text-gray-300 bg-[#2F2F2F] border border-[#505B74] px-3 rounded-lg mx-2 py-2 hover:bg-gray-800 mt-3"
            >
              <span className="text-lg">
                <MdOutlineMessage/>
              </span>
              <span className="font-sf text-sm font-semibold text-[#D1D3F9]">AI Agent 01</span>
            </a>
            <a
              href="#"
              className="flex   gap-2 items-center  text-gray-300 px-3 rounded-lg mx-2 py-2 hover:bg-gray-800 mt-3"
            >
              <span className="text-lg">
                <MdOutlineMessage/>
              </span>
              <span className="font-sf text-sm font-semibold text-[#D1D3F9]">AI Agent 02</span>
            </a>
            <a
              href="#"
              className="flex   gap-2 items-center  text-gray-300 px-3 rounded-lg mx-2 py-2 hover:bg-gray-800 mt-3"
            >
              <span className="text-lg">
                <MdOutlineMessage/>
              </span>
              <span className="font-sf text-sm font-semibold text-[#D1D3F9]">AI Agent 03</span>
            </a>
         
            
          </nav>
          <div className="relative pb-3  mx-2">
          <div className=" text-white ">
      <ul className="space-y-2">
        {/* Clear Conversations */}
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
          <FaRegTrashAlt className="text-base" />
          <span className="text-sm">Clear conversations</span>
        </li>

        {/* Dark Mode */}
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
          <FiSun className="text-base" />
          <span className="text-sm">Dark mode</span>
        </li>

        {/* My Account */}
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
          <AiOutlineUser  className="text-base" />
          <span className="text-sm">My account</span>
        </li>

        {/* Updates & FAQ */}
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
          <FaArrowUpRightFromSquare  className="text-sm" />
          <span className="text-sm">Updates & FAQ</span>
        </li>

        {/* Disconnect Wallet */}
        <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
          <MdOutlineLogout className="text-base" />
          <span className="text-sm">Disconnect Wallet</span>
        </li>
      </ul>
    </div>
            {/* Clear chats button */}
          </div>
          {/* <button className="my-4  mx-9 flex items-center justify-center space-x-2 py-2 px-4 text-sm text-gray-400 hover:text-white transition-colors duration-200 btn">
            <IoReloadOutline />
            <span>Clear all chats</span>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
