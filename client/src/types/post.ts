type Post = {
  user: string;
  category: string;
  title: string;
  description: string;
  images: string[];
  location: string;
  price: number;
  likes: number;
  isNegotiable: Boolean;
  displayType: string;
  createdAt: Date;
};

export default Post;