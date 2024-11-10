import ChatDAO from "../daos/chat.dao";

class ChatService {
  async createChat(chatData: Object) {
    return await ChatDAO.createChat(chatData);
  }

  async getChats() {
    return await ChatDAO.getChats();
  }

  async getChat(chatId: string) {
    return await ChatDAO.getChatById(chatId);
  }

  async updateChat(chatId: string, chatData: Object) {
    return await ChatDAO.updateChat(chatId, chatData);
  }

  async deleteChat(chatId: string) {
    return await ChatDAO.deleteChat(chatId);
  }
}

export default new ChatService();
