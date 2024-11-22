import Chatroom from "../models/chatroom.model";
class ChatroomDAO {
    async createChatroom(chatroomData) {
        const chatroom = new Chatroom(chatroomData);
        return await chatroom.save();
    }
    async getChatrooms() {
        return await Chatroom.find();
    }
    async getChatroomById(chatroomId) {
        return await Chatroom.findById(chatroomId);
    }
    async updateChatroom(chatroomId, chatroomData) {
        return await Chatroom.findByIdAndUpdate(chatroomId, chatroomData, {
            new: true,
        });
    }
    async deleteChatroom(chatroomId) {
        return await Chatroom.findByIdAndDelete(chatroomId);
    }
}
export default new ChatroomDAO();
