import { Schema } from "mongoose";

interface IReview {
  author: Schema.Types.ObjectId;
  target: Schema.Types.ObjectId;
  content: String;
  createdAt: Date;
}

export default IReview;
