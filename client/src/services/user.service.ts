import axios from "axios";
import IUser from "../interfaces/iuser";
import Endpoints from "../constants/endpoints";

class UserService {
  async createUser(userData: IUser): Promise<IUser> {
    const response = await axios.post(Endpoints.USERS, userData);
    return response.data;
  }

  async getUsers(): Promise<IUser[]> {
    const response = await axios.get(Endpoints.USERS);
    return response.data;
  }

  async getUser(id: string): Promise<IUser> {
    const response = await axios.get(`${Endpoints.USERS}/${id}`);
    return response.data;
  }

  async updateUser(id: string, userData: Partial<IUser>): Promise<IUser> {
    const response = await axios.put(`${Endpoints.USERS}/${id}`, userData);
    return response.data;
  }

  async deleteUser(id: string): Promise<void> {
    await axios.delete(`${Endpoints.USERS}/${id}`);
  }
}

const userService = new UserService();

export default userService;
