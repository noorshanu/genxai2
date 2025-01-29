import { FC } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import NewLayout from '@/components/NewLayout';

const ChatInterface: FC = () => {
  return (
   <NewLayout>
     <div className="flex flex-col h-[calc(100vh--73px)] sm:h-[calc(100vh-73px)]">
      <MessageList />
      <ChatInput />
    </div>
   </NewLayout>
  );
};

export default ChatInterface;