/* eslint-disable @next/next/no-img-element */
// components/chat/ChatInput.tsx
import { FC } from 'react';
import { AiOutlineStop } from "react-icons/ai";


const ChatInput: FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 w-full  px-4 pb-10 ">
      <div className="relative flex justify-center flex-1">
        <input
          type="text"
          placeholder="Let the magic begin, Tell GenX your wish!..."
          className="px-4 py-2 pr-16 bg-transparent border font-sf border-gray-800  text-[#000] bg-white rounded-2xl focus:outline-none w-full "
        />
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <img src="/images/send.png" alt="Send" className="w-6 h-6" />
        </button>
      </div>
   
      <button className="flex items-center gap-2 py-2 px-4 bg-black rounded-2xl border border-gray-800 hover:bg-gray-800/50 transition-colors">
        <AiOutlineStop className="text-gray-300" />
        <span className="text-sm text-gray-300 font-sf">Stop generating</span>
      </button>
    </div>
  );
};

export default ChatInput;