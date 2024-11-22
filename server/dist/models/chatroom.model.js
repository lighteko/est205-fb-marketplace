import { Schema, model } from "mongoose";
const ChatroomSchema = new Schema({
    post: { type: Schema.Types.ObjectId, ref: "Post" },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    chats: [{ type: Schema.Types.ObjectId, ref: "Chat" }],
    createdAt: { type: Date, default: Date.now },
});
export default model("Chatroom", ChatroomSchema);
