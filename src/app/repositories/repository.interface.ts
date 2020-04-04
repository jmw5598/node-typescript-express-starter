export interface IRepository<T> {
  findAll(): Promise<T[]>;
}
