import { Schema, model } from "mongoose";
import IChat from "./interfaces/ichat";

const ChatSchema = new Schema<IChat>({
  chatroom: { type: Schema.Types.ObjectId, required: true },
  from: { type: Schema.Types.ObjectId, required: true },
  to: { type: Schema.Types.ObjectId, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<IChat>("Chat", ChatSchema);
