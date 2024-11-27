import { useState, useEffect, useRef } from "react";
import User from "../../types/user";
import Chat from "../../types/chat";
import AuthService from "../../services/auth.service";
import ChatroomService from "../../services/chatroom.service";
import UserService from "../../services/user.service";
import ChatService from "../../services/chat.service";
import Text from "../common/Text";
import { toRelativeTime } from "../../shared/auxilary";
import { Colors } from "../../constants/styles";
import { useNavigate } from "react-router-dom";

export default function ChatroomCard({ chatroomId }: { chatroomId: string }) {
  const [loading, setLoading] = useState(true);
  const userId = useRef<string>("");
  const user = useRef<User | null>(null);
  const mostRecentChat = useRef<Chat | null>(null);
  const naviagte = useNavigate();
  useEffect(() => {
    const fetch = async () => {
      const chatroom = await ChatroomService.getChatroom(chatroomId);
      userId.current = await AuthService.getCurrentUserId();
      const partnerId = chatroom!.users.find((id) => id !== userId.current);
      user.current = await UserService.getUser(partnerId!);
      const chats = chatroom!.chats;
      mostRecentChat.current = await ChatService.getChat(
        chats[chats.length - 1]
      );
      setLoading(false);
    };
    setLoading(true);
    fetch();
  }, [chatroomId]);
  return (
    <div onClick={() => naviagte(`/chatroom/${chatroomId}/chat`)}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "1em"
          }}
        >
          <div
            id="profileIcon"
            style={{
              width: "3.5em",
              height: "3.5em",
              borderRadius: "1.75em",
              backgroundColor: Colors.secondaryColor,
            }}
          ></div>
          <div style={{ paddingLeft: "0.5em" }}>
            <div>
              <Text
                content={user.current!.name}
                fontSize={1}
                fontWeight={"500"}
                style={{ display: "inline-block" }}
              />
              <Text
                content={toRelativeTime(
                  new Date(mostRecentChat.current!.createdAt)
                )}
                fontSize={0.75}
                fontWeight={"400"}
                style={{ display: "inline-block", marginLeft: "0.5em" }}
              />
            </div>
            <span>{mostRecentChat.current!.content}</span>
          </div>
        </div>
      )}
    </div>
  );
}
