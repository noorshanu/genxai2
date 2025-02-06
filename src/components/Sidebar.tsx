/* eslint-disable @next/next/no-img-element */
// components/layout/Sidebar.tsx
"use client";
import { FC, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PiLinkSimpleBreakBold } from "react-icons/pi";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [isOpens, setIsOpens] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState("Selected Agent");

  const agents = [
    "Agent 01",
    "Agent 02",
    "Agent 03",
    "Agent 04",
    "Agent 05",
  ];
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
          <div className=" pt-8 pb-9 border-b border-gray-400 ">
            <img
              src="/images/Logo.png"
              alt=""
              className=" px-4 h-[32px] mx-auto"
            />
          </div>
          <nav className="flex-1 overflow-y-auto py-2 space-y-2  mt-6 pr-[18px] ">
            <button
              onClick={() => setIsOpens(!isOpens)}
              className="flex justify-start  rounded-lg mx-2 py-2 px-4 relative w-full  "
            >
              <span className="text-xl z-10">
                <img src="images/star.svg" alt="" className=" mr-12" />
              </span>
              <span className="font-sf text-[#ffffff] font-bold z-10 mr-12">
                Create
              </span>
              <p>{isOpens ? <FaChevronUp /> : <FaChevronDown />}</p>
              <img
                src="images/btn.png"
                alt=""
                className=" absolute top-0 left-0 right-0 mx-auto"
              />
            </button>
            {/* Dropdown Content */}
            {isOpens && (
              <div className="mt-2  rounded-md p-2 space-y-2 w-full ml-2">
                {/* Static Create New button */}
                <button className="w-full bg-gray-600 text-white py-2 rounded-md text-center ">
                  Create New
                </button>

                {/* Selection List */}
                {/* Select Dropdown */}
                <div className=" pt-2 ">
                  {/* <label className="block text-sm mb-1">Select Agent:</label> */}
                  <select
                    value={selectedAgent}
                    onChange={(e) => setSelectedAgent(e.target.value)}
                    className="w-full px-3 py-2 bg-[#000] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {agents.map((agent, index) => (
                      <option
                        key={index}
                        value={agent}
                        className="bg-gray-700 text-white"
                      >
                        {agent}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            <a
              href="/chat-genx"
              className="flex justify-start  rounded-lg mx-2 py-2 px-4 relative  "
            >
              <span className="text-xl z-10">
                <img src="images/msg.svg" alt="" className=" mr-12" />
              </span>
              <span className="font-sf text-[#ffffff] font-bold z-10">
                Generate
              </span>
              <img
                src="images/btn.png"
                alt=""
                className=" absolute top-0 left-0 right-0 mx-auto"
              />
            </a>

            <a
              href="/chat-genx"
              className="flex justify-start  rounded-lg mx-2 py-2 px-4 relative  "
            >
              <span className="text-xl z-10">
                <img src="images/chart.svg" alt="" className=" mr-12" />
              </span>
              <span className="font-sf text-[#ffffff] font-bold z-10">
                Trade
              </span>
              <img
                src="images/btn.png"
                alt=""
                className=" absolute top-0 left-0 right-0 mx-auto"
              />
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
                  <span className="text-sm">Faq</span>
                </li>

                {/* Disconnect Wallet */}
                <li className="flex items-center space-x-3 bg-[#6D6BFF] cursor-pointer hover:bg-gray-700 p-2 mr-7 rounded-lg">
                  <PiLinkSimpleBreakBold className="text-base" />
                  <a href="/list-agents" className="text-sm">
                    Wallet Connected
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
