import { Router } from "express";
import {getAllUsers, me, signIn, signUp} from "../controller/userController.js";
import {protect} from "../middleware/auth.js";
const router = Router();

router.post('/sign-in', signIn);
router.post('/sign-up', signUp);
router.get('/me',protect, me);
router.get('/all', getAllUsers);

export default router;