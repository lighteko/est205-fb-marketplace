import { Schema, model } from "mongoose";
import IReview from "./interfaces/ireview";

const ReviewSchema = new Schema<IReview>({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  target: { type: Schema.Types.ObjectId, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default model<IReview>("Review", ReviewSchema);
