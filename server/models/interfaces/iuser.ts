import { Schema } from "mongoose";

interface IUser {
  name: String;
  chatrooms: Schema.Types.ObjectId[];
  userPosts: Schema.Types.ObjectId[];
  likedPosts: Schema.Types.ObjectId[];
  status: String;
  reviews: Schema.Types.ObjectId[];
  location: String;
  createdAt: Date;
}

export default IUser;
