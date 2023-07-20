export interface IBaseRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T>;
  create(payload: T): Promise<T>;
  update(id: string, payload: T): Promise<T>;
}
