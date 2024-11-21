import Post from "../models/post.model";
class PostDAO {
    async createPost(postData) {
        const post = new Post(postData);
        return await post.save();
    }
    async getPosts() {
        return await Post.find();
    }
    async getPostsByCategory(categoryId) {
        return await Post.find({ category: categoryId });
    }
    async getPostById(postId) {
        return await Post.findById(postId);
    }
    async updatePost(postId, postData) {
        return await Post.findByIdAndUpdate(postId, postData, { new: true });
    }
    async deletePost(postId) {
        return await Post.findByIdAndDelete(postId);
    }
}
export default new PostDAO();
