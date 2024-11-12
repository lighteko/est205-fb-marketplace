import axios from "axios";
import Endpoints from "../constants/endpoints";
import IPost from "../interfaces/ipost";

class PostService {
  async createPost(postData: IPost): Promise<IPost> {
    const response = await axios.post(Endpoints.POSTS, postData);
    return response.data;
  }

  async getPosts(): Promise<IPost[]> {
    const response = await axios.get(Endpoints.POSTS);
    return response.data;
  }

  async getPost(id: string): Promise<IPost> {
    const response = await axios.get(`${Endpoints.POSTS}/${id}`);
    return response.data;
  }

  async updatePost(id: string, postData: Partial<IPost>): Promise<IPost> {
    const response = await axios.put(`${Endpoints.POSTS}/${id}`, postData);
    return response.data;
  }

  async deletePost(id: string): Promise<void> {
    return await axios.delete(`${Endpoints.POSTS}/${id}`);
  }
}

const postService = new PostService();

export default postService;
