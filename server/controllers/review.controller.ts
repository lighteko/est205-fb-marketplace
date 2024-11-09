import { Request, Response } from "express";
import ReviewService from "../services/review.service";

class ReviewController {
  async createReview(req: Request, res: Response) {
    try {
      const review = await ReviewService.createReview(req.body);
      res.status(201).send(review);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async getReviews(req: Request, res: Response) {
    try {
      const reviews = await ReviewService.getReviews();
      res.status(200).send(reviews);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async getReview(req: Request, res: Response) {
    try {
      const review = await ReviewService.getReview(req.params.id);
      res.status(200).send(review);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }

  async updateReview(req: Request, res: Response) {
    try {
      const review = await ReviewService.updateReview(req.params.id, req.body);
      res.status(200).send(review);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
}

export default new ReviewController();
