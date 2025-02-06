import { FC } from "react";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import NewLayout from "@/components/NewLayout";

const ChatInterface: FC = () => {
  return (
    <NewLayout>
      <>
        <div className="flex flex-col h-[calc(100vh--173px)] sm:h-[calc(100vh-203px)] max-w-4xl mx-auto">
          <MessageList />
        
        </div>
        <div className=" bg-[#1C1E22] border-t border-[#505B74]">
        <div className=" max-w-4xl mx-auto pb-[7px] pt-10">
        <ChatInput />
        </div>
        </div>
      </>
    </NewLayout>
  );
};

export default ChatInterface;
