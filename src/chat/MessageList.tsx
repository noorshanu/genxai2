"use client"
/* eslint-disable @next/next/no-img-element */
// components/chat/MessageList.tsx
import { FC, useEffect, useRef } from 'react';
import { Message } from '../types/chat';

interface MessageListProps {
  messages?: Message[];
}

interface MessageBubbleProps {
  isUser: boolean;
  content: string;
  avatar: string;
}

const MessageBubble: FC<MessageBubbleProps> = ({ isUser, content }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full  flex items-center justify-center mr-3 shrink-0 overflow-hidden">
          <img src="images/ailog.svg" alt="AI" className="w-5 h-5 object-cover" />
        </div>
      )}
      <div 
        className={`
          max-w-[80%]  rounded-4xl my-4
          ${isUser ? 'chat1' : 'chat2'} 
          rounded-4xl px-4 py-3 
       
          shadow-md
          ${isUser ? 'ml-auto' : 'mr-auto'}
        `}
      >
        <p className="text-gray-200 whitespace-pre-line leading-relaxed font-sf text-sm font-medium">{content}</p>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center ml-3 shrink-0 overflow-hidden">
          <img src="images/Avatar.png" alt="User" className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
};

const MessageList: FC<MessageListProps> = ({ messages = [] }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ 
        behavior: "smooth",
        block: "end"
      });
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll whenever messages change

  // Also scroll on initial load
  useEffect(() => {
    scrollToBottom();
  }, []);

  // Example messages for demonstration
  const defaultMessages = [
    {
      id: 1,
      content: "Hey, Can you create an AI Agent with latest trends?",
      isUser: true,
      avatar: "/user-avatar.png"
    },
    {
      id: 2,
      content: "Absolutely! Creating an AI Agent with the latest trends is our specialty.\n\nLet's get started:\n\n1. Tell me the purpose or goal of your AI Agent.\n\n2. Share any specific features or trends you'd like to include (e.g., blockchain integration, NFT capabilities, or predictive analysis).\n\n3. I'll generate a complete AI Agent framework, including functionality, branding, and deployment options, in just a few moments.\n\nReady to unlock the future?",
      isUser: false,
      avatar: "/ai-avatar.png"
    },    {
      id: 3,
      content: "Hey, Can you create an AI Agent with latest trends?",
      isUser: true,
      avatar: "/user-avatar.png"
    },{
      id: 4,
      content: "Hey, Can you create an AI Agent with latest trends?",
      isUser: false,
      avatar: "/user-avatar.png"
    },{
      id: 5,
      content: "Hey, Can you create an AI Agent with latest trends?",
      isUser: true,
      avatar: "/user-avatar.png"
    }
  ];

  const displayMessages = messages.length > 0 ? messages : defaultMessages;

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hidden">
      {displayMessages.map((message) => (
        <MessageBubble
          key={message.id}
          isUser={message.isUser}
          content={message.content}
          avatar={message.avatar}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;