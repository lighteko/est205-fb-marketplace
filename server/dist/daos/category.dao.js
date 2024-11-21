import Category from "../models/category.model";
class CategoryDAO {
    async createCategory(categoryData) {
        const category = new Category(categoryData);
        return await category.save();
    }
    async getCategories() {
        return await Category.find();
    }
    async getCategoryById(categoryId) {
        return await Category.findById(categoryId);
    }
    async updateCategory(categoryId, categoryData) {
        return await Category.findByIdAndUpdate(categoryId, categoryData, {
            new: true,
        });
    }
    async deleteCategory(categoryId) {
        return await Category.findByIdAndDelete(categoryId);
    }
}
export default new CategoryDAO();
