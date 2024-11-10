import { Request, Response } from "express";
import PostService from "../services/post.service";

class PostController {
  async createPost(req: Request, res: Response) {
    try {
      const post = await PostService.createPost(req.body);
      res.status(201).send(post);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async getPosts(req: Request, res: Response) {
    try {
      const posts = await PostService.getPosts();
      res.status(200).send(posts);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async getPost(req: Request, res: Response) {
    try {
      const post = await PostService.getPost(req.params.id);
      res.status(200).send(post);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async updatePost(req: Request, res: Response) {
    try {
      const post = await PostService.updatePost(req.params.id, req.body);
      res.status(200).send(post);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async deletePost(req: Request, res: Response) {
    try {
      await PostService.deletePost(req.params.id);
      res.sendStatus(204);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}

export default new PostController();
