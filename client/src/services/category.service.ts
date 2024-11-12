import axios from "axios";
import Endpoints from "../constants/endpoints";
import Category from "../types/category";

class CategoryService {
  async createCategory(categoryData: Category): Promise<Category> {
    const response = await axios.post(Endpoints.CATEGORIES, categoryData);
    return response.data;
  }

  async getCategories(): Promise<Category[]> {
    const response = await axios.get(Endpoints.CATEGORIES);
    return response.data;
  }

  async getCategory(id: string): Promise<Category> {
    const response = await axios.get(`${Endpoints.CATEGORIES}/${id}`);
    return response.data;
  }

  async updateCategory(
    id: string,
    categoryData: Partial<Category>
  ): Promise<Category> {
    const response = await axios.put(
      `${Endpoints.CATEGORIES}/${id}`,
      categoryData
    );
    return response.data;
  }

  async deleteCategory(id: string): Promise<void> {
    return await axios.delete(`${Endpoints.CATEGORIES}/${id}`);
  }
}

const categoryService = new CategoryService();

export default categoryService;
