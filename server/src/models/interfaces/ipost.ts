import { Schema } from 'mongoose';

interface IPost {
  user: Schema.Types.ObjectId;
  category: Schema.Types.ObjectId;
  title: string;
  description: string;
  images: Schema.Types.ObjectId[];
  location: string;
  price: number;
  likes: number;
  isNegotiable: Boolean;
  displayType: string;
  createdAt: Date;
}

export default IPost;
