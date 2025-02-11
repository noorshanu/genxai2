import NewLayout from '@/components/NewLayout'
import TradingDashboard from '@/components/TradingDashboard'
import React from 'react'

function page() {
  return (
   <>
   <NewLayout>

    <div>
        <TradingDashboard/>
    </div>
   </NewLayout>
   </>
  )
}

export default page