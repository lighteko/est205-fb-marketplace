import UserDAO from "../daos/user.dao";

class UserService {
  async createUser(userData: Object) {
    return await UserDAO.createUser(userData);
  }

  async getUsers() {
    return await UserDAO.getUsers();
  }

  async getUser(userId: string) {
    return await UserDAO.getUserById(userId);
  }

  async updateUser(userId: string, userData: Object) {
    return await UserDAO.updateUser(userId, userData);
  }

  async deleteUser(userId: string) {
    return await UserDAO.deleteUser(userId);
  }
}

export default new UserService();
