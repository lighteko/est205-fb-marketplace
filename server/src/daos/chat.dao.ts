import Chat from "../models/chat.model";

class ChatDAO {
  async createChat(chatData: Object) {
    const chat = new Chat(chatData);
    return await chat.save();
  }

  async getChats() {
    return await Chat.find();
  }

  async getChatById(chatId: string) {
    return await Chat.findById(chatId);
  }

  async updateChat(chatId: string, chatData: Object) {
    return await Chat.findByIdAndUpdate(chatId, chatData, {
      new: true,
    });
  }

  async deleteChat(chatId: string) {
    return await Chat.findByIdAndDelete(chatId);
  }
}

export default new ChatDAO();
