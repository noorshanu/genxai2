/* eslint-disable @next/next/no-img-element */
"use client";
import { FC, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuSquareArrowUp } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { PiLinkSimpleBreakBold } from "react-icons/pi";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
import AccountModal from "./AccountModal";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const agents = ["Agent 01", "Agent 02", "Agent 03", "Agent 04", "Agent 05"];

// Reusable Dropdown Component
const Dropdown: FC<{
  title: string;
  icon: string;
  children?: React.ReactNode;
}> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full rounded-lg px-4 py-2 relative bg-[#0047FF] border-[0.5px] border-[#9C9AFF]"
      >
        <span className="flex items-center gap-2">
          <img src={icon} alt="" className="w-6 h-6 mr-12 z-20" />
          <span className="font-sf text-white font-bold z-20">{title}</span>
        </span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        {/* <img src="images/btn.png" alt="" className="absolute inset-0 mx-auto" /> */}
      </button>

      {isOpen && <div className="mt-2 rounded-md p-2 space-y-2">{children}</div>}
    </div>
  );
};

const Sidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const [selectedAgent, setSelectedAgent] = useState("Agent 01");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#1C1E22] lg:hidden z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed lg:static inset-y-0 left-0 w-64 transition-transform duration-200 ease-in-out z-30 
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} bg-[#1C1E22] border-r border-gray-600`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="py-8 border-b border-gray-600 text-center">
            <img src="/images/Logo.png" alt="Logo" className="h-8 mx-auto" />
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 space-y-4 px-3">
            {/* Create Dropdown */}
            <Dropdown title="Create" icon="images/star.svg">
              <button className="w-full bg-gray-600 text-white py-2 rounded-md text-center ">
                Create New
              </button>
              <select
                value={selectedAgent}
                onChange={(e) => setSelectedAgent(e.target.value)}
                className="w-full px-3 py-2 bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {agents.map((agent, index) => (
                  <option key={index} value={agent} className="bg-gray-700">
                    {agent}
                  </option>
                ))}
              </select>
            </Dropdown>

            {/* Generate Dropdown */}
            <Dropdown title="Generate" icon="images/msg.svg">
              <button className="w-full bg-gray-600 text-white py-2 rounded-md text-center">
                Selected Agent Profiling
              </button>
            </Dropdown>

            {/* Trade Link */}
            <Dropdown title="Trade" icon="images/chart.svg">
              <button className="w-full bg-gray-600 text-white py-2 rounded-md text-center">
                Selected Agent Profiling
              </button>
            </Dropdown>
      
          </nav>

          {/* Footer Options */}
          <div className="border-t border-gray-600 py-4 px-3">
            <ul className="space-y-2 text-white">
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
                <FaRegTrashAlt />
                <span>Clear Conversations</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
                <FiSun />
                <span>Dark Mode</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg" onClick={() => setIsModalOpen(true)}>
                <AiOutlineUser />
                <span>My Account</span>
              </li>
              <li className="flex items-center gap-3 cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
           <LuSquareArrowUp/>
                <span>FAQ</span>
              </li>
              <li className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 p-2 rounded-lg">
                <PiLinkSimpleBreakBold />
                <a href="/list-agents" className="w-full">
                  Wallet Connected
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <AccountModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Sidebar;