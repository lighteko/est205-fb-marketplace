import axios from "axios";
import Endpoints from "../constants/endpoints";
import Chatroom from "../types/chatroom";

class ChatroomService {
  async createChatroom(chatroomData: Chatroom): Promise<Chatroom> {
    const response = await axios.post(Endpoints.CHATROOMS, chatroomData);
    return response.data;
  }

  async getChatrooms(): Promise<Chatroom[]> {
    const response = await axios.get(Endpoints.CHATROOMS);
    return response.data;
  }

  async getChatroom(id: string): Promise<Chatroom> {
    const response = await axios.get(`${Endpoints.CHATROOMS}/${id}`);
    return response.data;
  }

  async updateChatroom(
    id: string,
    chatroomData: Partial<Chatroom>
  ): Promise<Chatroom> {
    const response = await axios.put(
      `${Endpoints.CHATROOMS}/${id}`,
      chatroomData
    );
    return response.data;
  }

  async deleteChatroom(id: string): Promise<void> {
    return await axios.delete(`${Endpoints.CHATROOMS}/${id}`);
  }
}

const chatroomService = new ChatroomService();

export default chatroomService;
