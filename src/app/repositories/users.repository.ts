import { getRepository, Repository } from 'typeorm';
import { IRepository } from './repository.interface';
import { User } from '../data';

export class UsersRepository implements IRepository<User> {
  public async findAll(): Promise<User[]> {
    const repository: Repository<User> = getRepository(User);
    return repository.find();
  }
}
