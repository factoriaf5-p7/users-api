import {Router} from 'express';
import { getUserController } from '../controllers/user.controller';
const router = Router();

router.route('/user')
    .get(getUserController)
    // .post()

export default router;