"use client"

import { ChatArea } from "@/components/ChatArea";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Chat } from "@/types/Chat";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { v4 as uuidv4 } from 'uuid';

const Page = () => {

  const [AILoading, setAILoading] = useState(false);
  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<String>('');
  const [chatActive, setChatActive] = useState<Chat>();
  const [sidebarOpened, setSidebarOpened] = useState(false);

  useEffect(() => {
    setChatActive(chatList.find(item => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if(AILoading) getAIResponse();
  }, [AILoading]);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);

  const getAIResponse = () => {
    setTimeout(() => {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      if(chatIndex > -1) {
        chatListClone[chatIndex].messages.push({
          id: uuidv4(), 
          author: 'ai', 
          body: 'Aqui está a resposta da AI :) '
        });
        setChatList(chatListClone);
      }
      setChatList(chatListClone);
      setAILoading(false);
    }, 2000)
  };

  const handleClearConversations = () => {
    if(AILoading) return;
    
    setChatActiveId('');
    setChatList([]);
  }

  const handleNewChat = () => {
    if(AILoading) return;

    setChatActiveId('');
    closeSidebar();
  }

  const handleSendMessage = (message: string) => {
    if(!chatActiveId) {
      //Creating new chat
      var newChatId = uuidv4();
      setChatList([{
        id: newChatId,
        title: message,
        messages: [
          { id: uuidv4(), author: 'me', body: message }
        ]
      }, ...chatList]);

      setChatActiveId(newChatId);
    } else {
      //Updating existing chat
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex(item => item.id === chatActiveId);
      chatListClone[chatIndex].messages.push({
        id: uuidv4(), 
        author: 'me', 
        body: message
      });
      setChatList(chatListClone);
    }

    setAILoading(true);
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

        <ChatArea chat={chatActive} loading={AILoading} />

        <Footer 
          onSendMessage={handleSendMessage}
          disabled={AILoading}
        />

      </section>
    </main>
  )
}

export default Page;
