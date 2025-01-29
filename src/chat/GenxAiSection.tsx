/* eslint-disable @next/next/no-img-element */
import { LuMessagesSquare } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { LuShieldAlert } from "react-icons/lu";
export default function GenXAIComponent() {
    return (
      <div className="bg-black text-white pb-16 px-6 md:px-16 lg:px-32 pt-16">
        {/* Header */}
        <div className="flex justify-center">
        <div className=" py-5 ">
            <img src="/images/Logo.png" alt="" className=" px-4 h-[45px] mx-auto"  />
          </div>
        </div>
  
        {/* Grid Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          {/* Examples */}
          <div className=" p-6 rounded-2xl ">
            <div className=" flex justify-center flex-col gap-3">
         <p className=" text-center flex justify-center">
         <LuMessagesSquare  className=" text-3xl text-center flex justify-center"/>
         </p>
            <h2 className="text-base font-semibold mb-4 ">Examples</h2>
       
            </div>
            <ul className="space-y-3 text-[#000] ">
              <li className="bg-[#fff] p-3 rounded-lg text-sm text-start">
                "Create me an AI Agent structure related to current trends of $BASE"
              </li>
              <li className="bg-white text-sm p-3 rounded-lg text-start">
                "Got any creative ideas for Agents working on X?"
              </li>
              <li className="bg-white text-sm p-3 rounded-lg text-start">
                "Do I need to code my Agent to launch or How do I launch my agent at GenX AI?"
              </li>
            </ul>
          </div>
  
          {/* Capabilities */}
          <div className=" p-6 ">
          <div className=" flex justify-center text-center flex-col gap-3">
            <BsStars className=" text-3xl text-center flex justify-center mx-auto"/>
           <h2 className="text-base font-semibold mb-4 ">Capabilities</h2>
           </div>
            <ul className="space-y-3 text-[#000]">
              <li className="bg-white text-sm p-3 rounded-lg text-start">Remembers what user said earlier in the conversation.</li>
              <li className="bg-white text-sm p-3 rounded-lg text-start">Allows user to provide follow-up corrections.</li>
              <li className="bg-white text-sm p-3 rounded-lg text-start">Trained to decline inappropriate requests.</li>
            </ul>
          </div>
  
          {/* Limitations */}
          <div className=" p-6 ">
          <div className=" flex justify-center text-center flex-col gap-3">
            <LuShieldAlert className=" text-3xl text-center flex justify-center mx-auto"/>
            <h2 className="text-base font-semibold mb-4">Limitations</h2>
         </div>
            <ul className="space-y-3 text-[#000]">
              <li className="bg-white text-sm p-3 rounded-lg text-start">May occasionally generate non-related information.</li>
              <li className="bg-white text-sm p-3 rounded-lg text-start">May occasionally produce harmful instructions or biased content.</li>
              <li className="bg-white text-sm p-3 rounded-lg text-start">Limited knowledge of world and events after 2020.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }