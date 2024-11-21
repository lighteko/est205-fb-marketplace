import PostDAO from '../daos/post.dao';
class PostService {
    async createPost(postData) {
        return await PostDAO.createPost(postData);
    }
    async getPosts() {
        return await PostDAO.getPosts();
    }
    async getPostsByCategory(categoryId) {
        return await PostDAO.getPostsByCategory(categoryId);
    }
    async getPost(postId) {
        return await PostDAO.getPostById(postId);
    }
    async updatePost(postId, postData) {
        return await PostDAO.updatePost(postId, postData);
    }
    async deletePost(postId) {
        return await PostDAO.deletePost(postId);
    }
}
export default new PostService();
