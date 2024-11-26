import ChatService from "../services/chat.service";
class ChatController {
    async createChat(req, res) {
        try {
            const chat = await ChatService.createChat(req.body);
            res.status(201).send(chat);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async getChats(req, res) {
        try {
            const chats = await ChatService.getChats();
            res.status(200).send(chats);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async getChat(req, res) {
        try {
            const chat = await ChatService.getChat(req.params.id);
            res.status(200).send(chat);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async updateChat(req, res) {
        try {
            const chat = await ChatService.updateChat(req.params.id, req.body);
            res.status(200).send(chat);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
    async deleteChat(req, res) {
        try {
            await ChatService.deleteChat(req.params.id);
            res.sendStatus(204);
        }
        catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}
export default new ChatController();
