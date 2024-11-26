import { Request, Response } from "express";
import CategoryService from "../services/category.service";

class CategoryController {
  async createCategory(req: Request, res: Response) {
    try {
      const category = await CategoryService.createCategory(req.body);
      res.status(201).send(category);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async getCategories(req: Request, res: Response) {
    try {
      const categories = await CategoryService.getCategories();
      res.status(200).send(categories);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async getCategory(req: Request, res: Response) {
    try {
      const category = await CategoryService.getCategory(req.params.id);
      res.status(200).send(category);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async updateCategory(req: Request, res: Response) {
    try {
      const category = await CategoryService.updateCategory(
        req.params.id,
        req.body
      );
      res.status(200).send(category);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }

  async deleteCategory(req: Request, res: Response) {
    try {
      await CategoryService.deleteCategory(req.params.id);
      res.sendStatus(204);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}

export default new CategoryController();
