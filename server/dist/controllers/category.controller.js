import CategoryService from "../services/category.service";
class CategoryController {
    async createCategory(req, res) {
        try {
            const category = await CategoryService.createCategory(req.body);
            res.status(201).send(category);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async getCategories(req, res) {
        try {
            const categories = await CategoryService.getCategories();
            res.status(200).send(categories);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async getCategory(req, res) {
        try {
            const category = await CategoryService.getCategory(req.params.id);
            res.status(200).send(category);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async updateCategory(req, res) {
        try {
            const category = await CategoryService.updateCategory(req.params.id, req.body);
            res.status(200).send(category);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async deleteCategory(req, res) {
        try {
            await CategoryService.deleteCategory(req.params.id);
            res.sendStatus(204);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}
export default new CategoryController();
