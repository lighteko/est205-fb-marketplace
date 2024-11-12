import axios from "axios";
import Endpoints from "../constants/endpoints";
import ICategory from "../interfaces/icategory";

class CategoryService {
  async createCategory(categoryData: ICategory): Promise<ICategory> {
    const response = await axios.post(Endpoints.CATEGORIES, categoryData);
    return response.data;
  }

  async getCategories(): Promise<ICategory[]> {
    const response = await axios.get(Endpoints.CATEGORIES);
    return response.data;
  }

  async getCategory(id: string): Promise<ICategory> {
    const response = await axios.get(`${Endpoints.CATEGORIES}/${id}`);
    return response.data;
  }

  async updateCategory(
    id: string,
    categoryData: Partial<ICategory>
  ): Promise<ICategory> {
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
