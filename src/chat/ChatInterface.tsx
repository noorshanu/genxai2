import { FC } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

import NewChatLayout from '@/components/NewChatLayout';
import Header from '@/components/Header';

const ChatInterface: FC = () => {
  return (
<NewChatLayout>
<>
<Header/>
     <div className="flex flex-col h-[calc(100vh--73px)] sm:h-[calc(100vh-73px)] max-w-4xl mx-auto">
      <MessageList /> 
      <ChatInput />
      </div>
</>
      </NewChatLayout>

  );
};

export default ChatInterface;