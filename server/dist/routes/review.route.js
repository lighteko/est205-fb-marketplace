import ReviewController from '../controllers/review.controller';
import { Router } from 'express';
const router = Router();
router.get('/', ReviewController.getReviews);
router.post('/', ReviewController.createReview);
router.get('/:id', ReviewController.getReview);
router.put('/:id', ReviewController.updateReview);
router.delete('/:id', ReviewController.deleteReview);
export default router;
