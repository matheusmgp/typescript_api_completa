import { IUser } from "../../models/user.model";
import { HttpResponse } from "../protocols";

export interface ICreateUserController {
  handle(payload: IUser): Promise<HttpResponse<IUser>>;
}

export interface ICreateUserRepository<T> {
  create(payload: T): Promise<IUser>;
}
