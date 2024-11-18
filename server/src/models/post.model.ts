import { Schema, model } from "mongoose";
import IPost from "./interfaces/ipost";

const PostSchema = new Schema<IPost>({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: Schema.Types.ObjectId, required: true }],
  location: { type: String, required: true },
  price: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  isNegotiable: { type: Boolean, required: true },
  displayType: { type: String, required: true, default: "in-sale" },
  createdAt: { type: Date, default: Date.now },
});

export default model<IPost>("Post", PostSchema);
