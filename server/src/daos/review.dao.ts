import Review from "../models/review.model";

class ReviewDAO {
  async createReview(reviewData: Object) {
    const review = new Review(reviewData);
    return await review.save();
  }

  async getReviews() {
    return await Review.find();
  }

  async getReviewById(reviewId: string) {
    return await Review.findById(reviewId);
  }

  async updateReview(reviewId: string, reviewData: Object) {
    return await Review.findByIdAndUpdate(reviewId, reviewData, {
      new: true,
    });
  }

  async deleteReview(reviewId: string) {
    return await Review.findByIdAndDelete(reviewId);
  }
}

export default new ReviewDAO();
