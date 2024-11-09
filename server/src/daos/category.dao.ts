import Category from "../models/category.model";

class CategoryDAO {
  async createCategory(categoryData: Object) {
    const category = new Category(categoryData);
    return await category.save();
  }

  async getCategories() {
    return await Category.find();
  }

  async getCategoryById(categoryId: string) {
    return await Category.findById(categoryId);
  }

  async updateCategory(categoryId: string, categoryData: Object) {
    return await Category.findByIdAndUpdate(categoryId, categoryData, {
      new: true,
    });
  }

  async deleteCategory(categoryId: string) {
    return await Category.findByIdAndDelete(categoryId);
  }
}

export default new CategoryDAO();
