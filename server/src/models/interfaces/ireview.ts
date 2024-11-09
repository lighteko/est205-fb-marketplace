import { Schema } from "mongoose";

interface IReview {
  author: Schema.Types.ObjectId;
  target: Schema.Types.ObjectId;
  content: string;
  createdAt: Date;
}

export default IReview;
