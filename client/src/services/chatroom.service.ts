import axios from "axios";
import Endpoints from "../constants/endpoints";
import IChatroom from "../interfaces/ichatroom";

class ChatroomService {
  async createChatroom(chatroomData: IChatroom): Promise<IChatroom> {
    const response = await axios.post(Endpoints.CHATROOMS, chatroomData);
    return response.data;
  }

  async getChatrooms(): Promise<IChatroom[]> {
    const response = await axios.get(Endpoints.CHATROOMS);
    return response.data;
  }

  async getChatroom(id: string): Promise<IChatroom> {
    const response = await axios.get(`${Endpoints.CHATROOMS}/${id}`);
    return response.data;
  }

  async updateChatroom(
    id: string,
    chatroomData: Partial<IChatroom>
  ): Promise<IChatroom> {
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
