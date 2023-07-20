import { HttpResponse } from "../../controllers/protocols";

export interface IBaseController<T> {
  getAll(): Promise<HttpResponse<T[]>>;
  getById(id: string): Promise<HttpResponse<T>>;
  create(payload: T): Promise<HttpResponse<T>>;
  update(id: string, payload: T): Promise<HttpResponse<T>>;
}
