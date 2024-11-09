import Chatroom from "../models/chatroom.model";

class ChatroomDAO {
  async createChatroom(chatroomData: Object) {
    const chatroom = new Chatroom(chatroomData);
    return await chatroom.save();
  }

  async getChatrooms() {
    return await Chatroom.find();
  }

  async getChatroomById(chatroomId: string) {
    return await Chatroom.findById(chatroomId);
  }

  async updateChatroom(chatroomId: string, chatroomData: Object) {
    return await Chatroom.findByIdAndUpdate(chatroomId, chatroomData, {
      new: true,
    });
  }

  async deleteChatroom(chatroomId: string) {
    return await Chatroom.findByIdAndDelete(chatroomId);
  }
}

export default new ChatroomDAO();
