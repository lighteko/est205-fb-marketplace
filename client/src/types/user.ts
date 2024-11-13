type User = {
  _id: string;
  name: string;
  chatrooms: string[];
  userPosts: string[];
  likedPosts: string[];
  profilePicture: string;
  status: string;
  reviews: string[];
  location: string;
  createdAt: Date;
};

export default User;