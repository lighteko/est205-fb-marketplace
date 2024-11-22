import ChatroomService from "../services/chatroom.service";
class ChatroomController {
    async createChatroom(req, res) {
        try {
            const chatroom = await ChatroomService.createChatroom(req.body);
            res.status(201).send(chatroom);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async getChatrooms(req, res) {
        try {
            const chatrooms = await ChatroomService.getChatrooms();
            res.status(200).send(chatrooms);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async getChatroom(req, res) {
        try {
            const chatroom = await ChatroomService.getChatroom(req.params.id);
            res.status(200).send(chatroom);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async updateChatroom(req, res) {
        try {
            const chatroom = await ChatroomService.updateChatroom(req.params.id, req.body);
            res.status(200).send(chatroom);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async deleteChatroom(req, res) {
        try {
            await ChatroomService.deleteChatroom(req.params.id);
            res.sendStatus(204);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}
export default new ChatroomController();
