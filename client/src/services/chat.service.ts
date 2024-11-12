import axios from "axios";
import Endpoints from "../constants/endpoints";
import IChat from "../interfaces/ichat";

class ChatService {
  async createChat(chatData: IChat): Promise<IChat> {
    const response = await axios.post(Endpoints.CHATS, chatData);
    return response.data;
  }

  async getChats(): Promise<IChat[]> {
    const response = await axios.get(Endpoints.CHATS);
    return response.data;
  }

  async getChat(id: string): Promise<IChat> {
    const response = await axios.get(`${Endpoints.CHATS}/${id}`);
    return response.data;
  }

  async updateChat(id: string, chatData: Partial<IChat>): Promise<IChat> {
    const response = await axios.put(`${Endpoints.CHATS}/${id}`, chatData);
    return response.data;
  }

  async deleteChat(id: string): Promise<void> {
    return await axios.delete(`${Endpoints.CHATS}/${id}`);
  }
}

const chatService = new ChatService();

export default chatService;
