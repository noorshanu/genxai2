"use client";
// components/layout/Layout.tsx
import React, { ReactNode, useState } from "react";
import Header from "./Header";
import TempoSidebar from "./TempoSidebar";

const NewChatLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex bg-main overflow-hidden">
      {/* Sidebar remains fixed */}
      <TempoSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header remains fixed */}
        {/* <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} /> */}

        {/* Scrollable content area */}
        <main className="flex-1 overflow-auto ">{children}</main>
      </div>
    </div>
  );
};

export default NewChatLayout;