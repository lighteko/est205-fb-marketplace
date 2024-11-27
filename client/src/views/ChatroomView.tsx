import React, { useEffect, useState, useRef } from "react";
import AuthService from "../services/auth.service";
import NavigationBar from "../components/wireframe/NavigationBar";
import ChatroomCard from "../components/card/ChatroomCard";
import User from "../types/user";

export default function ChatroomView(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const user = useRef<User | null>(null);
  useEffect(() => {
    const fetch = async () => {
      user.current = await AuthService.getCurrentUser();
      setIsLoading(false);
    };
    setIsLoading(true);
    fetch();
  }, []);

  return (
    <>
      <section style={{ padding: "1em" }}>
        <h2>Chatrooms</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div>
              {user.current!.chatrooms.map((chatroomId) => (
                <ChatroomCard key={chatroomId} chatroomId={chatroomId} />
              ))}
            </div>
          </>
        )}
      </section>
      <NavigationBar />
    </>
  );
}
