/* eslint-disable @next/next/no-img-element */
import React from "react";

function AgentDetails() {
  return (
    <div className="bg-black  text-white  overflow-hidden  py-6">
      <div className=" flex justify-between px-4 items-center">
        <div className="flex gap-4 items-center">
          <div className=" w-full agentbox p-2">
            <div className="bg-[#35425A] rounded-lg p-2 flex mx-2  w-full gap-4 relative">
              <div className=" flex gap-2 w-full">
                <img src="images/nft3.png" alt="" className="h-14 w-14" />
                <div>
                  <p className=" font-bold text-[10px] ">Agenx ($agenx)</p>
                  <p className=" text-[10px] text-[#31FF5E] font-bold">
                    {" "}
                    Market Cap : $400.6k
                  </p>
                  <p className="text-[8px] font-semibold ">Replies : 700+</p>
                  <p className="text-[8px] text-gray-300">Creator:XYZ</p>
                </div>
              </div>
              <div>
                <img src="images/arrow.png" alt="" />
              </div>
              <p className=" text-gray-300 text-[8px] absolute bottom-2 right-4">
                5min ago
              </p>
            </div>
            <div className=" bg-[#35425A] p-2 rounded-lg mx-2 mt-2 w-full">
              <h1 className=" text-[10px]">about</h1>

              <p className="text-[10px] pt-2">this is about</p>
            </div>
          </div>

          <div className="bg-[#35425A] rounded-lg p-2 flex mx-2  w-full gap-4 relative">
            <div className=" flex gap-2 w-full">
              <img src="images/nft3.png" alt="" className="h-14 w-14" />
              <div>
                <p className=" font-bold text-[10px] ">Agenx ($agenx)</p>
                <p className=" text-[10px] text-[#31FF5E] font-bold">
                  {" "}
                  Market Cap : $400.6k
                </p>
                <p className="text-[8px] font-semibold ">Replies : 700+</p>
                <p className="text-[8px] text-gray-300">Creator:XYZ</p>
              </div>
            </div>
            <div>
              <img src="images/arrow.png" alt="" />
            </div>
            <p className=" text-gray-300 text-[8px] absolute bottom-2 right-4">
              5min ago
            </p>
          </div>

          <div className="bg-[#35425A] rounded-lg p-2 flex mx-2  w-full gap-4 relative">
            <div className=" flex gap-2 w-full">
              <img src="images/nft3.png" alt="" className="h-14 w-14" />
              <div>
                <p className=" font-bold text-[10px] ">Agenx ($agenx)</p>
                <p className=" text-[10px] text-[#31FF5E] font-bold">
                  {" "}
                  Market Cap : $400.6k
                </p>
                <p className="text-[8px] font-semibold ">Replies : 700+</p>
                <p className="text-[8px] text-gray-300">Creator:XYZ</p>
              </div>
            </div>
            <div>
              <img src="images/arrow.png" alt="" />
            </div>
            <p className=" text-gray-300 text-[8px] absolute bottom-2 right-4">
              5min ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentDetails;
