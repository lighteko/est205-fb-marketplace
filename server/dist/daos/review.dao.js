import Review from "../models/review.model";
class ReviewDAO {
    async createReview(reviewData) {
        const review = new Review(reviewData);
        return await review.save();
    }
    async getReviews() {
        return await Review.find();
    }
    async getReviewById(reviewId) {
        return await Review.findById(reviewId);
    }
    async updateReview(reviewId, reviewData) {
        return await Review.findByIdAndUpdate(reviewId, reviewData, {
            new: true,
        });
    }
    async deleteReview(reviewId) {
        return await Review.findByIdAndDelete(reviewId);
    }
}
export default new ReviewDAO();
