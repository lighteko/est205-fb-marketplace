import PostDAO from '../daos/post.dao';

class PostService {
  async createPost(postData: Object) {
    return await PostDAO.createPost(postData);
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

  async updatePost(postId: string, postData: Object) {
    return await PostDAO.updatePost(postId, postData);
  }

  async deletePost(postId: string) {
    return await PostDAO.deletePost(postId);
  }
}

export default new PostService();
