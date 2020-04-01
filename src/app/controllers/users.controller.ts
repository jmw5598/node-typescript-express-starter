import { Request, Response, NextFunction } from 'express';
import { User } from '../models';

export class UsersController {
  private readonly users: User[];

  constructor() {
    this.users = [
      new User('jmw5598', 'Jason', 'White'),
      new User('djt2020', 'Daniel', 'Townswell'),
      new User('dlw3512', 'Danielle', 'Whitmore'),
    ];
  }

  public async getAllUsers(request: Request, response: Response, next: NextFunction): Promise<any> {
    return response.status(200).send(this.users);
  }
}
