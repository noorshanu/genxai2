"use client";
// components/layout/Layout.tsx
import React, { ReactNode, useState } from 'react';

import Header from './Header';
import TempoSidebar from './TempoSidebar';

const NewChatLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex bg-main">
      <TempoSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 relative">{children}</main>
      </div>
    </div>
  );
};

export default NewChatLayout;