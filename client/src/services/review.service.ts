import axios from "axios";
import Review from "../types/review";
import Endpoints from "../constants/endpoints";

class ReviewService {
  async createReview(reviewData: Review): Promise<Review> {
    const response = await axios.post(Endpoints.REVIEWS, reviewData);
    return response.data;
  }

  async getReviews(): Promise<Review[]> {
    const response = await axios.get(Endpoints.REVIEWS);
    return response.data;
  }

  async getReview(id: string): Promise<Review> {
    const response = await axios.get(`${Endpoints.REVIEWS}/${id}`);
    return response.data;
  }

  async updateReview(
    id: string,
    reviewData: Partial<Review>
  ): Promise<Review> {
    const response = await axios.put(`${Endpoints.REVIEWS}/${id}`, reviewData);
    return response.data;
  }

  async deleteReview(id: string): Promise<void> {
    await axios.delete(`${Endpoints.REVIEWS}/${id}`);
  }
}

const reviewService = new ReviewService();

export default reviewService;
