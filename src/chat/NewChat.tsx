
import React from 'react'
import GenXAIComponent from './GenxAiSection'

import Footer from '@/components/Footer'
import Profilemark from '@/components/Profilemark'

function NewChat() {
  return (

   <div className='flex  flex-col justify-between  h-[100vh] '>
    <div>
    <h1 className=' pb-2 px-3 text-green-500'>
      Tranding Agents
    </h1>
      <Profilemark/>
    </div>
     <GenXAIComponent/>

     <Footer/>
   </div>

  )
}

export default NewChat