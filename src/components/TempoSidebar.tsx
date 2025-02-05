/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
// components/layout/Sidebar.tsx
import { FC } from "react";
import { FiSun } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const TempoSidebar: FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
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
            <a
              href="/chat-genx"
              className="flex justify-center items-center space-x-3  rounded-lg mx-2 py-2 relative  "
            >
              <span className="text-xl z-10">
                <IoAdd />
              </span>
              <span className="font-sf text-[#ffffff] font-bold z-10">
                New Agents
              </span>
              <img src="images/btn.png" alt="" className=" absolute top-0 left-0 right-0 mx-auto" />
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
                <li className="flex items-center space-x-3 bg-[#6D6BFF] cursor-pointer hover:bg-gray-700 p-2 rounded-lg">
                  <MdOutlineLogout className="text-base" />
                  <span className="text-sm">Disconnect Wallet</span>
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
