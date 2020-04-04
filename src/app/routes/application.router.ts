import express, { Router } from 'express';
import { usersRouter } from './users.router';

const router: Router = express.Router();
router.use('/users', usersRouter);

export const applicationRouter: Router = router;
