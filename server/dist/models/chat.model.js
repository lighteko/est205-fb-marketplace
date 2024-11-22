import { Schema, model } from "mongoose";
const ChatSchema = new Schema({
    chatroom: { type: Schema.Types.ObjectId, required: true },
    from: { type: Schema.Types.ObjectId, required: true },
    to: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
export default model("Chat", ChatSchema);
