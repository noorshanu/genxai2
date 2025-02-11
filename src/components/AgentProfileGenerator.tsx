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
  const chains = [
    { name: "Base", img: "images/Base.png" },
    { name: "BSC", img: "bsc.png" },
    { name: "AVAX", img: "avax.png" },
    { name: "SOL", img: "sol.png" },
    { name: "TRX", img: "trx.png" },
    { name: "ETH", img: "images/eth.svg" }
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-4 py-4">
      <h1 className="text-2xl md:text-3xl font-bold ">
        Agent Profile Generation
      </h1>

      <div className="flex flex-col md:flex-row gap-6 mt-2 items-center border-b border-gray-600 pb-4">
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
        <div className="flex flex-col gap-2 w-full max-w-xl">
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
            <button className="bg-[#0047FF] p-2 rounded-lg text-[12px] w-[140px]">
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

            <button className="bg-[#0047FF] p-2 rounded-lg text-[12px] w-[140px]">
              Generate Ticker
            </button>
          </div>

          <h1>About your AiAgent</h1>

          <div className=" profilebox p-2 relative ">
            <p>
              Lörem ipsum margaretha Mattsson seska det mörka nätet. Kat tykast
              visess dere dopögt Björn Månsson. Bidende polytins ukan
              antenytrens i anagram fast bjudkaffe. Trerade avis. On Hans
              Lundgren sektig som hexatäktigt. Heteropol sebel realog såväl som
              nis ohore. .
            </p>
            <FaCopy className="absolute right-3 bottom-3 text-gray-400 cursor-pointer" />
          </div>
          <p className=" text-center text-xs text-gray-600">
        "Data is generated based on your final inputs. Once saved, it cannot be regenerated!"
        </p>
        </div>
        <div className=" w-[350px]">
          <div className="bg-gray-900 p-4 rounded-xl  w-full  mx-auto">
            <h2 className="text-lg font-bold">Select your chain for Launch</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 flex-wrap">
            {chains.map((c) => (
            <button 
              key={c.name} 
              onClick={() => setChain(c.name)} 
              className={`p-2 rounded-lg flex flex-col justify-center items-center gap-2 text-[10px] ${chain === c.name ? "bg-purple-600" : "bg-gray-800"}`}
            >
              <img src={c.img} alt={c.name} className="w-6 h-6 " />
              {c.name}
            </button>
          ))}
            </div>
            <button className="bg-[#0047FF] p-2 rounded-lg mt-4 w-full flex items-center justify-center gap-2">
              <FaSquareVimeo /> Save
            </button>
          </div>
          <button className="bg-[#0047FF] p-3 rounded-lg mt-6 w-full max-w-lg mx-auto flex justify-center">
            Generate Profile
          </button>
        </div>
     
      </div>

   

      {/* Optional Links */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full justify-between items-center mx-auto">
        <div className="relative">
          <label htmlFor="">Telegram Link (Optional)</label>
          <input
            type="text"
            placeholder=""
            className="w-full p-2 bg-gray-800 rounded-lg focus:outline-none"
          />
          <FaTelegram className="absolute left-3 top-9 text-gray-400" />
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
    </div>
  );
};

export default AgentProfileGenerator;
