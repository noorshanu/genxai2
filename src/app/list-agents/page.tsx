import NewChatLayout from '@/components/NewChatLayout'
import React from 'react'


import Footer from '@/components/Footer'
import Profilemark from '@/components/Profilemark'
import AgentDetails from '@/components/AgentDetails'

function page() {
  return (
<>
<NewChatLayout>
  
<div className='flex  flex-col justify-between  ] '>
    <div>
    <h1 className=' pb-2 px-3 text-green-500'>
      Tranding Agents
    </h1>
      <Profilemark/>
    </div>

    <div>
      <AgentDetails/>
    </div>


     <Footer/>
   </div>
</NewChatLayout>
</>
  )
}

export default page