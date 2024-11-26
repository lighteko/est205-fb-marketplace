type PostPayload = {
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
};

export default PostPayload;