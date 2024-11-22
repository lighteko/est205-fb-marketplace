import ChatController from '../controllers/chat.controller';
import { Router } from 'express';
const router = Router();
router.get('/', ChatController.getChats);
router.post('/', ChatController.createChat);
router.get('/:id', ChatController.getChat);
router.put('/:id', ChatController.updateChat);
router.delete('/:id', ChatController.deleteChat);
export default router;
