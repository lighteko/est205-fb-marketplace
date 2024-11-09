import CategoryDAO from "../daos/category.dao";

class CategoryService {
  async createCategory(categoryData: Object) {
    return await CategoryDAO.createCategory(categoryData);
  }

  async getCategories() {
    return await CategoryDAO.getCategories();
  }

  async getCategory(categoryId: string) {
    return await CategoryDAO.getCategoryById(categoryId);
  }

  async updateCategory(categoryId: string, categoryData: Object) {
    return await CategoryDAO.updateCategory(categoryId, categoryData);
  }

  async deleteCategory(categoryId: string) {
    return await CategoryDAO.deleteCategory(categoryId);
  }
}

export default new CategoryService();
