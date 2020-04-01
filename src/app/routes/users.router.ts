import express, { Request, Response, Router, NextFunction } from 'express';
import { UsersController } from '../controllers';

const router: Router = express.Router();
const controller: UsersController = new UsersController();

router.get('/', async (request: Request, response: Response, next: NextFunction) => {
  await controller.getAllUsers(request, response, next);
});

export const usersRouter: Router = router;
