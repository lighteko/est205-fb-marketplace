import ChatroomDAO from "../daos/chatroom.dao";
class ChatroomService {
    async createChatroom(chatroomData) {
        return await ChatroomDAO.createChatroom(chatroomData);
    }
    async getChatrooms() {
        return await ChatroomDAO.getChatrooms();
    }
    async getChatroom(chatroomId) {
        return await ChatroomDAO.getChatroomById(chatroomId);
    }
    async updateChatroom(chatroomId, chatroomData) {
        return await ChatroomDAO.updateChatroom(chatroomId, chatroomData);
    }
    async deleteChatroom(chatroomId) {
        return await ChatroomDAO.deleteChatroom(chatroomId);
    }
}
export default new ChatroomService();
