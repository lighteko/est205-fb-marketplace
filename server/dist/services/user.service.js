import UserDAO from "../daos/user.dao";
class UserService {
    async createUser(userData) {
        return await UserDAO.createUser(userData);
    }
    async getUsers() {
        return await UserDAO.getUsers();
    }
    async getUser(userId) {
        return await UserDAO.getUserById(userId);
    }
    async updateUser(userId, userData) {
        return await UserDAO.updateUser(userId, userData);
    }
    async deleteUser(userId) {
        return await UserDAO.deleteUser(userId);
    }
}
export default new UserService();
