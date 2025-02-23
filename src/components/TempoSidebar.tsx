
/* eslint-disable @next/next/no-img-element */
// components/layout/Sidebar.tsx
import { FC } from "react";
import { FiSun } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

import { PiLinkSimpleBreakBold } from "react-icons/pi";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const TempoSidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#1C1E22] lg:hidden z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed lg:static inset-y-0 left-0 w-64 side transform 
        transition-transform duration-200 ease-in-out z-30 
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full">
          <div className=" pt-8 pb-9 border-b border-gray-400 ">
            <img
              src="/images/Logo.png"
              alt=""
              className=" px-4 h-[32px] mx-auto"
            />
          </div>
          <nav className="flex-1 overflow-y-auto py-2 space-y-2  mt-6 pr-[18px] ">
            <a
              href="/chat-genx"
              className="flex justify-start items-center  rounded-lg mx-2 py-2 px-4 relative bg-[#0047FF] border-[0.5px] border-[#9C9AFF]  "
            >
              <span className="text-xl z-10">
                <img src="images/robo.svg" alt="" className=" mr-12" />
              </span>
              <span className="font-sf text-[#ffffff] font-bold z-10">
                Create
              </span>
             
            </a>
            <a
              href="/generate"
              className="flex justify-start items-center  rounded-lg mx-2 py-2 px-4 relative bg-[#0047FF] border-[0.5px] border-[#9C9AFF]  "
            >
              <span className="text-xl z-10">
                <img src="images/set.svg" alt="" className=" mr-12" />
              </span>
              <span className="font-sf text-[#ffffff] font-bold z-10 ">
                Generate
              </span>
          
            </a>

            <a
              href="/trade"
              className="flex justify-start items-center  rounded-lg mx-2 py-2 px-4 relative bg-[#0047FF] border-[0.5px] border-[#9C9AFF]  "
            >
              <span className="text-xl z-10">
                <img src="images/chart.svg" alt="" className=" mr-12" />
              </span>
              <span className="font-sf text-[#ffffff] font-bold z-10">
                Trade
              </span>
             
            </a>
          </nav>
          <div className="relative pb-3 border-t border-gray-400 px-4">
            <div className=" text-white pt-4 ">
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
                  <AiOutlineUser className="text-base" />
                  <span className="text-sm">My account</span>
                </li>

                {/* Updates & FAQ */}
                <li className="flex items-center space-x-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
                  <FaArrowUpRightFromSquare className="text-sm" />
                  <span className="text-sm">User Guide</span>
                </li>

                {/* Disconnect Wallet */}
                <li className="flex items-center space-x-3 bg-[#0047FF] border-[0.5px] border-[#9C9AFF] cursor-pointer hover:bg-gray-700 p-2 mr-7 rounded-lg">
                  <PiLinkSimpleBreakBold className="text-base" />
                  <a href="/list-agents" className="text-sm">connect Wallet</a>
                </li>
       
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TempoSidebar;
