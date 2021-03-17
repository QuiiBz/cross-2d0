import { Router } from 'express';
import authRouter from './auth/router';
import '../passport/passport';

const router = Router();

router.use('/auth', authRouter);

export default router;
