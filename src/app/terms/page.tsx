import NewChatLayout from '@/components/NewChatLayout'
import Profilemark from '@/components/Profilemark'
import TermsCondition from '@/components/Terms&Condition'
import React from 'react'

function page() {
  return (
   <NewChatLayout>
       <div>
    <h1 className=' pb-2 px-3 text-green-500'>
      Tranding Agents
    </h1>
      <Profilemark/>
    </div>

    <TermsCondition/>
   </NewChatLayout>
  )
}

export default page