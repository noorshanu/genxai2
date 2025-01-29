import NewChatLayout from '@/components/NewChatLayout'
import React from 'react'
import GenXAIComponent from './GenxAiSection'
import ChatInput from './ChatInput'

function NewChat() {
  return (
  <NewChatLayout>
    <GenXAIComponent/>
    <ChatInput/>
  </NewChatLayout>
  )
}

export default NewChat