import { Router } from 'express';
import all from './all';
import toggle from './toggle';
import create from './create';
import deleteTask from './delete';

const router = Router();

router.get('/', all);
router.put('/toggle', toggle);
router.post('/create', create);
router.delete('/delete', deleteTask);

export default router;
