import express, { Request, Response, Router, NextFunction } from 'express';
import { UsersController } from '../controllers';
import { IRepository, UsersRepository } from '../repositories';
import { User } from '../data';

const router: Router = express.Router();
const usersRepository: IRepository<User> = new UsersRepository();
const controller: UsersController = new UsersController(usersRepository);

router.get('/', async (request: Request, response: Response, next: NextFunction) => {
  await controller.getAllUsers(request, response, next);
});

export const usersRouter: Router = router;
