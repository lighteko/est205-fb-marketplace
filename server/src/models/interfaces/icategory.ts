import { Schema } from 'mongoose';

interface ICategory {
  name: string;
  icon: string;
  posts: Schema.Types.ObjectId[];
  createdAt: Date;
}

export default ICategory;
