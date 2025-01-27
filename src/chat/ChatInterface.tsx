import { FC } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

const ChatInterface: FC = () => {
  return (
    <div className="flex flex-col h-[calc(100vh--73px)] sm:h-[calc(100vh-73px)]">
      <MessageList />
      <ChatInput />
    </div>
  );
};

export default ChatInterface;