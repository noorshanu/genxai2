import NewChatLayout from '@/components/NewChatLayout'
import React from 'react'


import Footer from '@/components/Footer'
import Profilemark from '@/components/Profilemark'

function page() {
  return (
<>
<NewChatLayout>
  
<div className='flex  flex-col justify-between  h-[100vh] '>
    <div>
    <h1 className=' pb-2 px-3 text-green-500'>
      Tranding Agents
    </h1>
      <Profilemark/>
    </div>


     <Footer/>
   </div>
</NewChatLayout>
</>
  )
}

export default page