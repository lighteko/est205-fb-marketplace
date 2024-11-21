import Chat from "../models/chat.model";
class ChatDAO {
    async createChat(chatData) {
        const chat = new Chat(chatData);
        return await chat.save();
    }
    async getChats() {
        return await Chat.find();
    }
    async getChatById(chatId) {
        return await Chat.findById(chatId);
    }
    async updateChat(chatId, chatData) {
        return await Chat.findByIdAndUpdate(chatId, chatData, {
            new: true,
        });
    }
    async deleteChat(chatId) {
        return await Chat.findByIdAndDelete(chatId);
    }
}
export default new ChatDAO();
