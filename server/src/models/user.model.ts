import { Schema, model } from "mongoose";
import IUser from "./interfaces/iuser";

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  chatrooms: [{ type: Schema.Types.ObjectId, ref: "Chatroom" }],
  userPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  likedPosts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  status: { type: String, required: true },
  reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  location: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<IUser>("User", UserSchema);
