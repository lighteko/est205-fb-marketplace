import ChatroomController from "../controllers/chatroom.controller";
import { Router } from "express";

const router = Router();
router.get("/", ChatroomController.getChatrooms);
router.post("/", ChatroomController.createChatroom);
router.get("/:id", ChatroomController.getChatroom);
router.put("/:id", ChatroomController.updateChatroom);
router.delete("/:id", ChatroomController.deleteChatroom);

export default router;
