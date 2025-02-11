import AgentProfileGenerator from '@/components/AgentProfileGenerator'
import NewLayout from '@/components/NewLayout'
import React from 'react'

function page() {
  return (
    
    <>
    <NewLayout>
        <div>
           <AgentProfileGenerator/>
        </div>
    </NewLayout>
    </>
  )
}

export default page