import { Router } from "express";
import {getMessage, sendMessage} from "../controller/message.js";
const router = Router();

router.post('/message', sendMessage);
router.get('/message', getMessage);

export default router;