"use client";
// components/layout/Layout.tsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const NewLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex bg-main">
      {/* Sidebar - Fixed */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} className="fixed left-0 top-0 h-screen z-50" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen ml-[var(--sidebar-width)]">
        {/* Header - Fixed */}
        <Header 
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
          className="sticky top-0 w-full z-40 bg-white shadow-md"
        />

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-auto ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default NewLayout;