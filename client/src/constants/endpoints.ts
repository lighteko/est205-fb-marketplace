const API_URL: string = "est205-fb-marketplace-production.up.railway.app/api";

const Endpoints = Object.freeze({
  USERS: `${API_URL}/users`,
  POSTS: `${API_URL}/posts`,
  REVIEWS: `${API_URL}/reviews`,
  CHATS: `${API_URL}/chats`,
  CHATROOMS: `${API_URL}/chatrooms`,
  CATEGORIES: `${API_URL}/categories`,
});

export default Endpoints;
