import { Schema } from 'mongoose';

interface ICategory {
  name: String;
  icon: String;
  posts: Schema.Types.ObjectId[];
  createdAt: Date;
}

export default ICategory;
