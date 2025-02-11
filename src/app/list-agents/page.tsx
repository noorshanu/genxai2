import NewChatLayout from '@/components/NewChatLayout'
import React from 'react'


import Footer from '@/components/Footer'
import Profilemark from '@/components/Profilemark'
import AgentDetails from '@/components/AgentDetails'
import AgentSearch from '@/components/AgentSearch'

function page() {
  return (
<>
<NewChatLayout>
  
<div className='flex  flex-col justify-between   '>
    <div>
    <h1 className=' pb-2 px-3 text-green-500'>
      Tranding Agents
    </h1>
      <Profilemark/>
    </div>

    <div className=' flex items-center'>
      <AgentDetails/>

      <div className="flex gap-2 p-4 justify-center">
      <input
        type="text"
        placeholder="Search Agent"
        className="px-4 py-2 rounded-full bg-[#8494AD] text-[#fff] w-64 sm:w-80 focus:outline-none"
      />
      <button className="px-4 py-2 bg-[#6663F6] text-white rounded-full ">Enter</button>
    </div>
    </div>

    <div className=' px-4 '>
      <AgentSearch/>
      
    </div>


     <Footer/>
   </div>
</NewChatLayout>
</>
  )
}

export default page