import UserService from "../services/user.service";
class UserController {
    async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            res.status(201).send(user);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async getUsers(req, res) {
        try {
            const users = await UserService.getUsers();
            res.status(200).send(users);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async getUser(req, res) {
        try {
            const user = await UserService.getUser(req.params.id);
            res.status(200).send(user);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async updateUser(req, res) {
        try {
            const user = await UserService.updateUser(req.params.id, req.body);
            res.status(200).send(user);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async deleteUser(req, res) {
        try {
            await UserService.deleteUser(req.params.id);
            res.sendStatus(204);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}
export default new UserController();
