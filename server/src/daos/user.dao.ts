import User from "../models/user.model";

class UserDAO {
  async createUser(userData: Object) {
    const user = new User(userData);
    return await user.save();
  }

  async getUsers() {
    return await User.find();
  }

  async getUserById(userId: string) {
    return await User.findById(userId);
  }

  async updateUser(userId: string, userData: Object) {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  }

  async deleteUser(userId: string) {
    return await User.findByIdAndDelete(userId);
  }
}

export default new UserDAO();
