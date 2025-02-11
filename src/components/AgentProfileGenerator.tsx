"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {
  FaCopy,
  FaSquareVimeo,
  FaTelegram,
  FaXTwitter,
  FaGlobe,
} from "react-icons/fa6";

const AgentProfileGenerator = () => {
  const [contract, setContract] = useState("");
  const [ticker, setTicker] = useState("");
  const [chain, setChain] = useState("");

  const chains = ["Base", "BSC", "AVAX", "SOL", "TRX", "ETH"];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold ">
        Agent Profile Generation
      </h1>

      <div className="flex flex-col md:flex-row gap-6 mt-6 items-center">
        {/* Profile Card */}
        <div className="profilebox p-4 rounded-xl w-full max-w-[200px] ">
          <img
            src="images/profile.png"
            alt="Agent"
            className="rounded-lg w-full h-40  object-cover"
          />
          <div className=" flex justify-between items-center pt-6 pb-2">
            <h2 className=" font-bold  text-xs">Agent Name</h2>
            <p className="text-blue-400 text-[8px]">STOKEN</p>
          </div>
          <p className="text-gray-400 text-[10px]">@username</p>
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-4 w-full max-w-lg">
          <div className="flex items-center gap-4">
            <div className="relative w-full ">
              <input
                type="text"
                placeholder="Contract"
                value={contract}
                onChange={(e) => setContract(e.target.value)}
                className="p-2 bg-gray-800 rounded-lg w-full focus:outline-none"
              />
              <FaCopy className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
            </div>
            <button className="bg-[#6D6BFF] p-2 rounded-lg text-sm">
              Generate Address
            </button>
          </div>
  <div className=" flex items-center justify-between gap-4">
  <div className="relative w-full">
            <input
              type="text"
              placeholder="Ticker"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
              className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none"
            />
            <FaCopy className="absolute right-3 top-3 text-gray-400 cursor-pointer" />
          </div>

          <button className="bg-purple-600 p-2 rounded-lg text-sm">
            Generate Ticker
          </button>

  </div>
        </div>
      </div>

      {/* Chain Selection */}
      <div className="bg-gray-900 p-4 rounded-xl mt-6 w-full max-w-lg mx-auto">
        <h2 className="text-lg font-bold">Select your chain for Launch</h2>
        <div className="flex gap-4 mt-4 flex-wrap">
          {chains.map((c) => (
            <button
              key={c}
              onClick={() => setChain(c)}
              className={`p-2 rounded-lg ${
                chain === c ? "bg-purple-600" : "bg-gray-800"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <button className="bg-purple-600 p-2 rounded-lg mt-4 w-full flex items-center justify-center gap-2">
          <FaSquareVimeo /> Save
        </button>
      </div>

      {/* Optional Links */}
      <div className="mt-6 flex flex-col gap-4 w-full max-w-lg mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Telegram Link (Optional)"
            className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none"
          />
          <FaTelegram className="absolute right-3 top-3 text-gray-400" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Twitter/X Link (Optional)"
            className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none"
          />
          <FaXTwitter className="absolute right-3 top-3 text-gray-400" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Website Link (Optional)"
            className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none"
          />
          <FaGlobe className="absolute right-3 top-3 text-gray-400" />
        </div>
      </div>

      <button className="bg-purple-600 p-3 rounded-lg mt-6 w-full max-w-lg mx-auto flex justify-center">
        Generate Profile
      </button>
    </div>
  );
};

export default AgentProfileGenerator;
