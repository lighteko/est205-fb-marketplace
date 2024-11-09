import PostController from '../controllers/post.controller';
import { Router } from 'express';

const router = Router();
router.get('/', PostController.getPosts);
router.post('/', PostController.createPost);
router.get('/:id', PostController.getPost);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);

export default router;