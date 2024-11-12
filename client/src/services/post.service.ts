import axios from "axios";
import Endpoints from "../constants/endpoints";
import Post from "../types/post";

class PostService {
  async createPost(postData: Post): Promise<Post> {
    const response = await axios.post(Endpoints.POSTS, postData);
    return response.data;
  }

  async getPosts(): Promise<Post[]> {
    const response = await axios.get(Endpoints.POSTS);
    return response.data;
  }

  async getPost(id: string): Promise<Post> {
    const response = await axios.get(`${Endpoints.POSTS}/${id}`);
    return response.data;
  }

  async updatePost(id: string, postData: Partial<Post>): Promise<Post> {
    const response = await axios.put(`${Endpoints.POSTS}/${id}`, postData);
    return response.data;
  }

  async deletePost(id: string): Promise<void> {
    return await axios.delete(`${Endpoints.POSTS}/${id}`);
  }
}

const postService = new PostService();

export default postService;
