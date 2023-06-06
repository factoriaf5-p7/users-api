import {Router} from 'express';
import { getUserController, sendUserController } from '../controllers/user.controller';
const router = Router();

router.route('/user')
    .get(getUserController)
    .post(sendUserController)

export default router;