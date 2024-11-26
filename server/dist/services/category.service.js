import CategoryDAO from "../daos/category.dao";
class CategoryService {
    async createCategory(categoryData) {
        return await CategoryDAO.createCategory(categoryData);
    }
    async getCategories() {
        return await CategoryDAO.getCategories();
    }
    async getCategory(categoryId) {
        return await CategoryDAO.getCategoryById(categoryId);
    }
    async updateCategory(categoryId, categoryData) {
        return await CategoryDAO.updateCategory(categoryId, categoryData);
    }
    async deleteCategory(categoryId) {
        return await CategoryDAO.deleteCategory(categoryId);
    }
}
export default new CategoryService();
