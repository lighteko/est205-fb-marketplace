import { Schema, model } from "mongoose";
import IChat from "./interfaces/ichat";

const ChatSchema = new Schema<IChat>({
  chatroom: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<IChat>("Chat", ChatSchema);
