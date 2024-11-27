import Input from "../common/Input";
import useInput from "../../hooks/useInput";
import { InputType } from "../../constants/enums";
import CircButton from "../common/CircButton";
import chatroomService from "../../services/chatroom.service";
import chatService from "../../services/chat.service";
import Chat from "../../types/chat";
import authService from "../../services/auth.service";
import { Dispatch, SetStateAction } from "react";

export default function ChatInput({
  chatroomId,
  partnerId,
  setChats,
}: {
  chatroomId: string;
  partnerId: string;
  setChats: Dispatch<SetStateAction<string[]>>;
}) {
  const [value, handleValue, setValue] = useInput("");
  const submit = async () => {
    const chat = {
      chatroom: chatroomId,
      from: await authService.getCurrentUserId(),
      to: partnerId,
      content: value,
    } as Partial<Chat>;
    const newChat = await chatService.createChat(chat);
    const chatroom = await chatroomService.getChatroom(chatroomId);
    await chatroomService.updateChatroom(chatroomId, {
      chats: [...chatroom.chats, newChat._id],
    });
    setChats([...chatroom.chats, newChat._id]);
    setValue("");
  };
  return (
    <section style={{ position: "fixed", bottom: "5em" }}>
      <div style={{ position: "relative" }}>
        <Input
          type={InputType.TEXTAREA}
          placeholder={""}
          onChange={handleValue}
          value={value}
          name={""}
          style={{
            minHeight: "2em",
            maxHeight: "2.5em",
            width: "calc(100vw - 6.55em)",
            marginLeft: "1em",
            paddingRight: "4em",
            position: "fixed",
          }}
        />
        <CircButton
          text={"Send"}
          onClick={submit}
          size={4}
          style={{ position: "fixed", right: "1em", bottom: "1em" }}
        />
      </div>
    </section>
  );
}
