/* eslint-disable @next/next/no-img-element */
// components/layout/Sidebar.tsx
import { FC } from "react";
import { IoReloadOutline } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";


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
              className="flex justify-center items-center space-x-3 bg-[#101114] rounded-full mx-8 py-2 "
            >
              <span className="text-xl">
             <IoAdd/>
              </span>
              <span className="font-sf text-[#ffffff] font-bold">New Agents</span>
            </a>

         
            
          </nav>
          <div className="relative p-4 box-pro rounded-lg  mx-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl font-medium text-white font-sf">78.65%</span>
              <span className="px-2 py-1 text-xs font-semibold bg-purple-500 text-white rounded-full">
                PRO
              </span>
            </div>

            <div className="text-sm text-gray-400 font-sf">Performance boosted</div>

            {/* Progress indicator */}
            <div className="mt-3 space-y-2">
              <div className="flex items-center text-xs text-gray-400">
                <span className="flex-shrink-0 font-sf">↑ 36.50%</span>
                <span className="ml-2 text-gray-500 font-sf">
                  Since last you visited
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: "78.65%" }}
                />
              </div>
            </div>

            {/* Clear chats button */}
          </div>
          <button className="my-4  mx-9 flex items-center justify-center space-x-2 py-2 px-4 text-sm text-gray-400 hover:text-white transition-colors duration-200 btn">
            <IoReloadOutline />
            <span>Clear all chats</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
