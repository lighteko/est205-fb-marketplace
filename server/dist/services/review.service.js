import ReviewDAO from '../daos/review.dao';
class ReviewService {
    async createReview(reviewData) {
        return await ReviewDAO.createReview(reviewData);
    }
    async getReviews() {
        return await ReviewDAO.getReviews();
    }
    async getReview(reviewId) {
        return await ReviewDAO.getReviewById(reviewId);
    }
    async updateReview(reviewId, reviewData) {
        return await ReviewDAO.updateReview(reviewId, reviewData);
    }
    async deleteReview(reviewId) {
        return await ReviewDAO.deleteReview(reviewId);
    }
}
export default new ReviewService();
