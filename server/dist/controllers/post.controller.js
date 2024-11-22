import PostService from "../services/post.service";
class PostController {
    async createPost(req, res) {
        try {
            const post = await PostService.createPost(req.body);
            res.status(201).send(post);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async getPosts(req, res) {
        try {
            const posts = await PostService.getPosts();
            res.status(200).send(posts);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async getPostsByCategory(req, res) {
        try {
            const posts = await PostService.getPostsByCategory(req.params.categoryId);
            res.status(200).send(posts);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async getPost(req, res) {
        try {
            const post = await PostService.getPost(req.params.id);
            res.status(200).send(post);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async updatePost(req, res) {
        try {
            const post = await PostService.updatePost(req.params.id, req.body);
            res.status(200).send(post);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async deletePost(req, res) {
        try {
            await PostService.deletePost(req.params.id);
            res.sendStatus(204);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}
export default new PostController();
