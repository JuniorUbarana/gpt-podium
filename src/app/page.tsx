"use client"

import Sidebar from "@/components/Sidebar";
import { useState } from "react";

const Page = () => {

  const [sidebarOpened, setSidebarOpened] = useState(false);

  const closeSidebar = () => {
    setSidebarOpened(false);
  };

  const handleClearConversations = () => {

  }

  const handleNewChat = () => {

  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
        <div className="w-16 h-96 bg-red-200 mb-2">...</div>
      </Sidebar>
      <section className="flex flex-col w-full">
        <button onClick={() => setSidebarOpened(true)} className="md:hidden">Abrir Sidebar</button>
      </section>
    </main>
  )
}

export default Page;