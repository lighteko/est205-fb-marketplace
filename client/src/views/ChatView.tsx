import React, { useState, useEffect, useRef } from "react";
import User from "../types/user";
import Chatroom from "../types/chatroom";
import ChatBalloon from "../components/card/ChatBalloon";
import authService from "../services/auth.service";
import chatroomService from "../services/chatroom.service";
import userService from "../services/user.service";
import { useParams } from "react-router-dom";
import Text from "../components/common/Text";
import { Colors } from "../constants/styles";
import ChatInput from "../components/wireframe/ChatInput";
import { Link } from "react-router-dom";
import exit from "../assets/icons/exit.svg";
import Icon from "../components/common/Icon";

export default function ChatView(): JSX.Element {
  const chatroomRef = useRef<Chatroom | null>(null);
  const partnerRef = useRef<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { chatroom } = useParams<{ chatroom: string }>();
  const [chats, setChats] = useState<string[]>([]);
  useEffect(() => {
    const fetch = async () => {
      chatroomRef.current = await chatroomService.getChatroom(chatroom!);
      const currentUser = await authService.getCurrentUserId();
      const partner = chatroomRef.current.users.filter(
        (user) => user !== currentUser
      )[0];
      partnerRef.current = await userService.getUser(partner);
      setChats(chatroomRef.current.chats);
      setLoading(false);
    };
    fetch();
  }, [chatroom]);
  return loading ? (
    <>loading...</>
  ) : (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "1em",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "1em",
          }}
        >
          <div
            id="profileIcon"
            style={{
              width: "3.5em",
              height: "3.5em",
              borderRadius: "1.75em",
              backgroundColor: Colors.secondaryColor,
              marginRight: "1em",
            }}
          ></div>
          <Text
            content={partnerRef.current!.name}
            fontSize={1.5}
            fontWeight={"bold"}
          />
        </div>
        <Link to="/chatrooms">
          <Icon src={exit} alt="Exit" size={1.5} />
        </Link>
      </div>
      {chats.map((chat) => (
        <ChatBalloon key={chat} chatId={chat} />
      ))}
      <ChatInput
        chatroomId={chatroom!}
        partnerId={partnerRef.current!._id}
        setChats={setChats}
      />
    </>
  );
}
