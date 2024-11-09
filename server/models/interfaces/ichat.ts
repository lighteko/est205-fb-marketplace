import { Schema } from 'mongoose';

interface IChat {
  chatroom: Schema.Types.ObjectId;
  from: Schema.Types.ObjectId;
  to: Schema.Types.ObjectId;
  content: String;
  createdAt: Date;
}

export default IChat;
