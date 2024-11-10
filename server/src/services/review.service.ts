import ReviewDAO from '../daos/review.dao';

class ReviewService {
  async createReview(reviewData: Object) {
    return await ReviewDAO.createReview(reviewData);
  }

  async getReviews() {
    return await ReviewDAO.getReviews();
  }

  async getReview(reviewId: string) {
    return await ReviewDAO.getReviewById(reviewId);
  }

  async updateReview(reviewId: string, reviewData: Object) {
    return await ReviewDAO.updateReview(reviewId, reviewData);
  }

  async deleteReview(reviewId: string) {
    return await ReviewDAO.deleteReview(reviewId);
  }
}

export default new ReviewService();
