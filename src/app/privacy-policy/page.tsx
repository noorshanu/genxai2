import NewChatLayout from '@/components/NewChatLayout'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import Profilemark from '@/components/Profilemark'
import React from 'react'

function page() {
  return (
   <>
   <NewChatLayout>
   <div>
    <h1 className=' pb-2 px-3 text-green-500'>
      Tranding Agents
    </h1>
      <Profilemark/>
    </div>
    <PrivacyPolicy/>
   </NewChatLayout>
   </>
  )
}

export default page