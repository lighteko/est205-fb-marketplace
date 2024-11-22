import ChatDAO from "../daos/chat.dao";
class ChatService {
    async createChat(chatData) {
        return await ChatDAO.createChat(chatData);
    }
    async getChats() {
        return await ChatDAO.getChats();
    }
    async getChat(chatId) {
        return await ChatDAO.getChatById(chatId);
    }
    async updateChat(chatId, chatData) {
        return await ChatDAO.updateChat(chatId, chatData);
    }
    async deleteChat(chatId) {
        return await ChatDAO.deleteChat(chatId);
    }
}
export default new ChatService();
