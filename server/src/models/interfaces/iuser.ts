import { Schema } from "mongoose";

interface IUser {
  name: string;
  chatrooms: Schema.Types.ObjectId[];
  userPosts: Schema.Types.ObjectId[];
  likedPosts: Schema.Types.ObjectId[];
  status: string;
  reviews: Schema.Types.ObjectId[];
  location: string;
  createdAt: Date;
}

export default IUser;
