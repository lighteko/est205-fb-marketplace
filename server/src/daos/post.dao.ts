import Post from "../models/post.model";

class PostDAO {
  async createPost(postData: Object) {
    const post = new Post(postData);
    return await post.save();
  }

  async getPosts() {
    return await Post.find();
  }

  async getPostById(postId: string) {
    return await Post.findById(postId);
  }

  async updatePost(postId: string, postData: Object) {
    return await Post.findByIdAndUpdate(postId, postData, { new: true });
  }

  async deletePost(postId: string) {
    return await Post.findByIdAndDelete(postId);
  }
}

export default new PostDAO();
