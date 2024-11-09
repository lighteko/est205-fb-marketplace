import { Schema } from 'mongoose';

interface IChatRoom {
  post: Schema.Types.ObjectId;
  users: Schema.Types.ObjectId[];
  chats: Schema.Types.ObjectId[];
  createdAt: Date;
}

export default IChatRoom;
