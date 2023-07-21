"use client"

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Chat } from "@/types/Chat";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

const Page = () => {

  const [AILoading, setAILoading] = useState(false);
  const [chatList, setChatList] = useState();
  const [chatActive, setChatActive] = useState<Chat>();
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const handleClearConversations = () => {

  }

  const handleNewChat = () => {
    
  }

  const handleSendMessage = () => {

  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
        ...
      </Sidebar>
      <section className="flex flex-col w-full">
        <Header
          openSidebarClick={openSidebar}
          title={`Bla bla bla`}
          newChatClick={handleNewChat}
        />

        <ChatArea chat={chatActive} />

        <Footer 
          onSendMessage={handleSendMessage}
          disabled={AILoading}
        />

      </section>
    </main>
  )
}

export default Page;
