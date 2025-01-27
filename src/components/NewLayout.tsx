"use client";
// components/layout/Layout.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const NewLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex bg-main">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 relative">{children}</main>
      </div>
    </div>
  );
};

export default NewLayout;