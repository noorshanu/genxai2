/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { FaCopy, FaInfoCircle } from "react-icons/fa";
import { GiTreeBranch, GiWolfHead } from "react-icons/gi";
import { SiFurrynetwork } from "react-icons/si";
import { FaPaperPlane } from "react-icons/fa";

const TradingDashboard: React.FC = () => {
  const [wallet] = useState("0x1C4C...F463a3");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wallet);
    alert("Copied to clipboard!");
  };
  return (
    <div className="min-h-screen text-white">
      {/* Header / Title */}

      {/* Main Body */}
      <div className="grid md:grid-cols-3 gap-4 p-4">
        {/* Left Column: Chart & Info */}
        <div className="md:col-span-2 space-y-4">
          {/* Chart Section */}
          <div className="p-4 rounded bg-[#1C1E22]">
            {/* Chart Header */}
            <div className="flex items-center justify-between mb-2">
              <header className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src="images/agent.png" alt="" />
                  <div>
                    <h1 className="text-xl font-bold">
                      Agent XYZ{" "}
                      <span className=" text-gray-600 text-sm">$GAME</span>
                    </h1>
                    <div className="flex items-center space-x-3 mt-1">
                      {/* Wallet Address */}
                      <div className="flex items-center space-x-2 bg-transparent border border-gray-500 px-3 py-1 rounded-lg text-gray-300">
                        <span className=" text-xs">{wallet}</span>
                        <FaCopy
                          className="text-gray-400 cursor-pointer"
                          onClick={copyToClipboard}
                        />
                      </div>

                      {/* Category Button */}
                      <button className="bg-transparent border border-gray-500 text-xs px-3 py-1 rounded-lg text-gray-300">
                        Productivity
                      </button>

                      {/* Icons */}
                      <button className="w-8 h-8 flex items-center justify-center   rounded-full">
                        <GiWolfHead className="text-gray-400" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center   rounded-full">
                        <SiFurrynetwork className="text-purple-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </header>
              <div className="flex justify-between space-x-6  text-gray-300">
      {/* 24h Vol */}
      <div className="text-center">
        <p className="text-gray-500 text-xs">24h Vol</p>
        <p className="text-sm font-semibold">$1.9m</p>
      </div>

      {/* Market Cap */}
      <div className="text-center">
        <p className="text-gray-500 text-xs">Market Cap</p>
        <p className="text-sm font-semibold">$48.5m</p>
      </div>

      {/* Created At */}
      <div className="text-center">
        <p className="text-gray-500 text-xs">Created At</p>
        <p className="text-sm font-semibold">4 months ago</p>
      </div>
    </div>
            </div>
            {/* Dummy Chart */}
            <div className=" bg-gray-700 flex items-center justify-center rounded">
              <img src="images/charty.png" alt="" />
            </div>



            <div className="flex justify-between space-x-4  py-4 ">
      {/* Mindshare */}
      <div className="flex flex-col items-start   text-gray-300 px-6 py-3 rounded-lg border border-gray-600 w-1/5">
        <div className="flex items-center space-x-1 text-gray-500">
          <span>Mindshare</span>
          <FaInfoCircle className="text-gray-500" />
        </div>
        <p className="text-lg font-semibold">0.32%</p>
      </div>

      {/* Impressions */}
      <div className="flex flex-col items-start   text-gray-300 px-6 py-3 rounded-lg border border-gray-600 w-1/5">
        <p className="text-gray-500">Impressions</p>
        <p className="text-lg font-semibold">68,619</p>
      </div>

      {/* Engagement */}
      <div className="flex flex-col items-start   text-gray-300 px-6 py-3 rounded-lg border border-gray-600 w-1/5">
        <p className="text-gray-500">Engagement</p>
        <p className="text-lg font-semibold">1,279</p>
      </div>

      {/* Followers */}
      <div className="flex flex-col items-start   text-gray-300 px-6 py-3 rounded-lg border border-gray-600 w-1/5">
        <p className="text-gray-500">Followers</p>
        <p className="text-lg font-semibold">11,608</p>
      </div>

      {/* Top Tweets */}
      <div className="flex items-center justify-between   text-gray-300 px-6 py-3 rounded-lg border border-gray-600 w-1/5">
        <p className="text-gray-500">Top Tweets</p>
        <GiTreeBranch className="text-white text-xl bg-gray-700 p-1 rounded-full" />
      </div>
    </div>
          </div>

       
  
          {/* Agent Trades Table */}
          <div className="  p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Agent Trades</h2>
            <div className="overflow-auto">
              <table className="w-full text-left bg-[#263248] rounded-lg px-2 text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-2 px-2">Account</th>
                    <th className="py-2">Type</th>
                    <th className="py-2">SOL</th>
                    <th className="py-2">$TOKEN</th>
                    <th className="py-2">Duration</th>
                    <th className="py-2">TX Hash</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-2 px-2">@Navin</td>
                    <td className="py-2 text-red-400">Sell</td>
                    <td className="py-2">0.5</td>
                    <td className="py-2">182,234</td>
                    <td className="py-2">10mins ago</td>
                    <td className="py-2 text-indigo-400">0x23353d4xv</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column: Trading Box & Stats */}
        <div className="space-y-4">
          {/* Trading Box */}
          <div className=" bg-[#263248] p-4 rounded space-y-4">
            <div className="flex gap-5 justify-between">
              <button className="px-4 py-2 rounded bg-[#0047FF] hover:bg-blue-700 w-full">
                Buy
              </button>
              <button className="px-4 py-2 rounded bg-[#1C1E22] hover:bg-red-700 text-gray-500 w-full">
                Sell
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <button className="py-1 text-gray-300  bg-[#1B1D28] px-2 rounded-xl text-xs">
                Switch To PHITER
              </button>
              <button className="py-1 text-gray-300  bg-[#1B1D28] px-2 rounded-xl text-xs">
                Set Max Slippage
              </button>
            </div>

            <div className="mt-2">
              <label
                className="block text-gray-400 text-xs mb-1"
                htmlFor="amount"
              >
                Amount (SOL)
              </label>
              <div className="flex items-center space-x-2">
                <input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  className="w-full px-3 py-2 bg-gray-700 rounded-xl outline-none border-black border text-white"
                />
                <div className="px-3 py-2 bg-gray-600 rounded">SOL</div>
              </div>
            </div>

            <button className="w-full mt-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded font-semibold">
              Place Trade
            </button>

            {/* Bonding Curve & Ranking Progress */}
            <div className="text-sm space-y-2">
              <div className="mt-4">
                <p className="text-gray-400 mb-1">
                  Bonding Curve Progress: 30%
                </p>
                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className="bg-indigo-500 h-2 rounded"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-gray-400 mb-1">
                  Top 10 Ranking Progress: 60%
                </p>
                <div className="w-full bg-gray-700 h-2 rounded">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Token Data */}
          <div className=" bg-[#263248] p-4 rounded text-sm">
            <p className="mb-1">Token Data</p>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>MC</span>
                <span>$48.5m</span>
              </li>
              <li className="flex justify-between text-red-400">
                <span>24h Chg</span>
                <span>-19.54%</span>
              </li>
              <li className="flex justify-between">
                <span>TVL</span>
                <span>$8.87m</span>
              </li>
              <li className="flex justify-between">
                <span>Holders</span>
                <span>182,234</span>
              </li>
            </ul>
          </div>

          {/* Global Chats */}
          <div className=" bg-white  p-4 rounded flex flex-col text-black h-72">
            <h2 className="text-lg font-semibold mb-2">Global Chats</h2>
            <div className="flex-grow space-y-2 overflow-auto text-sm">
              <div className="flex items-center justify-between bg-gray-700 px-2 py-1 rounded">
                <span>Chat Guy</span>
                <span className="text-gray-400 text-xs">
                  alammohd - 15 mins ago
                </span>
              </div>
              <div className="flex items-center justify-between bg-gray-700 px-2 py-1 rounded">
                <span className="font-bold">Selected Agent</span>
                <span className="text-gray-400 text-xs">
                  Navin - 10 mins ago
                </span>
              </div>
              <div className="flex items-center justify-between bg-gray-700 px-2 py-1 rounded">
                <span>Chat Guy</span>
                <span className="text-gray-400 text-xs">
                  alammohd - 5 mins ago
                </span>
              </div>
              {/* Add more messages as desired */}
            </div>
            <div className="mt-2 flex">
              <input
                type="text"
                placeholder="Have something to say?"
                className="flex-grow px-3 py-2 bg-gray-700 rounded-l outline-none text-white"
              />
              <button className="px-4 bg-indigo-600 hover:bg-indigo-700 rounded-r">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingDashboard;
