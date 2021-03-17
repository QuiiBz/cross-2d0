import { Router } from 'express';
import passport from 'passport';
import authRouter from './auth/router';
import tasksRouter from './tasks/router';
import '../passport/passport';

const router = Router();

router.use('/auth', authRouter);
router.use('/tasks', passport.authenticate('jwt', { session: false }), tasksRouter);

export default router;
