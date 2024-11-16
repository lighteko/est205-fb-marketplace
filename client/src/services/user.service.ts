import axios from "axios";
import User from "../types/user";
import Endpoints from "../constants/endpoints";

class UserService {
  async createUser(userData: User): Promise<User> {
    const response = await axios.post(Endpoints.USERS, userData);
    return response.data;
  }

  async getUsers(): Promise<User[]> {
    const response = await axios.get(Endpoints.USERS);
    return response.data;
  }

  async getUser(id: string): Promise<User> {
    const response = await axios.get(`${Endpoints.USERS}/${id}`);
    return response.data;
  }

  async updateUser(id: string, userData: Partial<User>): Promise<User> {
    const response = await axios.put(`${Endpoints.USERS}/${id}`, userData);
    return response.data;
  }

  async deleteUser(id: string): Promise<void> {
    await axios.delete(`${Endpoints.USERS}/${id}`);
  }
}

const userService = new UserService();

export default userService;
