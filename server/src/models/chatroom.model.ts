import { Schema, model } from "mongoose";
import IChatroom from "./interfaces/ichatroom";

const ChatroomSchema = new Schema<IChatroom>({
  post: { type: Schema.Types.ObjectId, ref: "Post" },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  chats: [{ type: Schema.Types.ObjectId, ref: "Chat" }],
  createdAt: { type: Date, default: Date.now },
});

export default model<IChatroom>("Chatroom", ChatroomSchema);
