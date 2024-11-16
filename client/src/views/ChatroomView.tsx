import React, { useEffect, useState, useRef } from "react";
import Chatroom from "../types/chatroom";
import User from "../types/user";
import AuthService from "../services/auth.service";
import ChatroomService from "../services/chatroom.service";
import NavigationBar from "../components/wireframe/NavigationBar";

export default function ChatroomView(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const chatrooms = useRef<Chatroom[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const user = await AuthService.getCurrentUser();
      const chatroomIds = user.chatrooms;
      chatrooms.current = await Promise.all(
        chatroomIds.map((id) => ChatroomService.getChatroom(id))
      );
      setIsLoading(false);
    };
    setIsLoading(true);
    fetch();
  }, []);

  return (
    <>
      <NavigationBar />
    </>
  );
}
