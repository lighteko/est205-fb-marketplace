import { Schema, model } from "mongoose";
import ICategory from "./interfaces/icategory";

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  createdAt: { type: Date, default: Date.now },
});

export default model<ICategory>("Category", CategorySchema);
