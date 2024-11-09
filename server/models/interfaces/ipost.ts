import { Schema } from 'mongoose';

interface IPost {
  user: Schema.Types.ObjectId;
  category: Schema.Types.ObjectId;
  title: String;
  description: String;
  images: String[];
  location: String;
  price: Number;
  likes: Number;
  isNegotiable: Boolean;
  displayType: String;
  createdAt: Date;
}

export default IPost;
