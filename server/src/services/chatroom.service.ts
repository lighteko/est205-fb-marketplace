import ChatroomDAO from "../daos/chatroom.dao";

class ChatroomService {
  async createChatroom(chatroomData: Object) {
    return await ChatroomDAO.createChatroom(chatroomData);
  }

  async getChatrooms() {
    return await ChatroomDAO.getChatrooms();
  }

  async getChatroom(chatroomId: string) {
    return await ChatroomDAO.getChatroomById(chatroomId);
  }

  async updateChatroom(chatroomId: string, chatroomData: Object) {
    return await ChatroomDAO.updateChatroom(chatroomId, chatroomData);
  }

  async deleteChatroom(chatroomId: string) {
    return await ChatroomDAO.deleteChatroom(chatroomId);
  }
}

export default new ChatroomService();
