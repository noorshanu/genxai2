/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { GiWolfHead } from "react-icons/gi";
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
                      <button className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full">
                        <GiWolfHead className="text-gray-400" />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full">
                        <SiFurrynetwork className="text-purple-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </header>
              <div className="flex items-center space-x-2 text-sm">
                <button className="px-2 py-1 bg-gray-700 rounded">15m</button>
                <button className="px-2 py-1 bg-gray-700 rounded">1h</button>
                <button className="px-2 py-1 bg-gray-700 rounded">1d</button>
                <button className="px-2 py-1 bg-gray-700 rounded">...</button>
              </div>
            </div>
            {/* Dummy Chart */}
            <div className=" bg-gray-700 flex items-center justify-center rounded">
              <img src="images/charty.png" alt="" />
            </div>
          </div>

          {/* Info Metrics */}
          <div className="bg-gray-800 p-4 rounded space-y-2">
            <h2 className="text-lg font-semibold mb-2">Influence Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="space-y-1">
                <p className="text-gray-400">Monarchy</p>
                <p className="font-bold">0.32%</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400">Engagement</p>
                <p className="font-bold">68,199</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400">Resources</p>
                <p className="font-bold">1,270</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400">Followers</p>
                <p className="font-bold">11,608</p>
              </div>
            </div>
            {/* Summary Text */}
            <p className="text-xs text-gray-400 mt-2">
              GAI empowers AI agents to operate autonomously, processing inputs
              and generating responses while learning from past interactions.
            </p>
          </div>

          {/* Agent Trades Table */}
          <div className="bg-gray-800 p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">Agent Trades</h2>
            <div className="overflow-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-2">Account</th>
                    <th className="py-2">Type</th>
                    <th className="py-2">SOL</th>
                    <th className="py-2">$TOKEN</th>
                    <th className="py-2">Duration</th>
                    <th className="py-2">TX Hash</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-700">
                    <td className="py-2">@Navin</td>
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
          <div className="bg-gray-800 p-4 rounded space-y-4">
            <div className="flex justify-between">
              <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700">
                Buy
              </button>
              <button className="px-4 py-2 rounded bg-red-600 hover:bg-red-700">
                Sell
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <button className="py-1 text-gray-300 underline">
                Switch To PHITER
              </button>
              <button className="py-1 text-gray-300 underline">
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
                  className="w-full px-3 py-2 bg-gray-700 rounded outline-none text-white"
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
          <div className="bg-gray-800 p-4 rounded text-sm">
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
          <div className="bg-gray-800 p-4 rounded flex flex-col h-72">
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
