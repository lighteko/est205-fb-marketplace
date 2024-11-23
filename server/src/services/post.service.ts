import PostDAO from "../daos/post.dao";
import ImageService from "./image.service";
import PostPayload from "../types/post.payload";

class PostService {
  async createPost(postData: PostPayload) {
    const images = postData.images;
    const imageIds = [];
    try {
      for (let image of images) {
        const res = await ImageService.uploadImage(image);
        imageIds.push(res._id);
      }
    } catch (e) {
      console.log(e);
    }
    const post = {
      ...postData,
      images: imageIds,
    };
    return await PostDAO.createPost(post);
  }

  async getPosts() {
    return await PostDAO.getPosts();
  }

  async getPostsByCategory(categoryId: string) {
    return await PostDAO.getPostsByCategory(categoryId);
  }

  async getPost(postId: string) {
    return await PostDAO.getPostById(postId);
  }

  async updatePost(postId: string, postData: PostPayload) {
    return await PostDAO.updatePost(postId, postData);
  }

  async deletePost(postId: string) {
    return await PostDAO.deletePost(postId);
  }
}

export default new PostService();
