import React, { useState, useEffect, useRef } from "react";
import authService from "../../services/auth.service";
import User from "../../types/user";
import Chat from "../../types/chat";
import chatService from "../../services/chat.service";
import { Colors } from "../../constants/styles";

export default function ChatBalloon({ chatId }: { chatId: string }) {
  const userRef = useRef<User | null>(null);
  const chatRef = useRef<Chat | null>(null);
  const isMyChatRef = useRef<boolean>(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      userRef.current = await authService.getCurrentUser();
      chatRef.current = await chatService.getChat(chatId);
      if (chatRef.current.from === userRef.current._id)
        isMyChatRef.current = true;
      setLoading(false);
    };
    fetch();
  }, [chatId]);
  return loading ? (
    <span>loading...</span>
  ) : (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "1em",
        justifyContent: isMyChatRef.current ? "end" : "start",
      }}
    >
      <div
        style={{
          color: isMyChatRef.current ? "white" : "black",

          height: "auto",
          borderRadius: isMyChatRef.current
            ? "1em 0 1em 1em"
            : "0 1em 1em 1em",
          backgroundColor: isMyChatRef.current
            ? Colors.primaryColor
            : Colors.secondaryColor,
          paddingLeft: "0.5em",
          paddingRight: "0.5em",
          paddingTop: "0.25em",
          paddingBottom: "0.25em",
          display: "inline-block",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {chatRef.current?.content}
      </div>
    </section>
  );
}
