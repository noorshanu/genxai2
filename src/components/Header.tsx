/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { FaRegBell } from "react-icons/fa";

import { IoInformationCircleOutline } from "react-icons/io5";
interface HeaderProps {
  onMenuClick: () => void;
  className?: string; 
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header: FC<HeaderProps> = ({ onMenuClick ,className}) => {
  return (
    <header className=" border-[#505B74] bg-[#1C1E22] border-b-[0.5px] px-4 py-3">
      <div className="flex items-center justify-between">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        <div className="flex items-center space-x-4 ml-auto search-box px-2 py-2">
        <div className="relative">
      <input
        type="search"
        placeholder="Search"
        className="w-64 px-4 py-1 bg-white rounded-full text-gray-300 focus:outline-none font-sf "
      />
    </div>
    <button >
    <FaRegBell />
    </button>
   
    <button >
    <IoInformationCircleOutline />
    </button>
          <div className=" ">
            <img src="images/Avatar.png" alt="" />

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;