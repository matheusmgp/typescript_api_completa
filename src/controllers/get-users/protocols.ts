import { IUser } from "../../models/user.model";
import { HttpResponse } from "../protocols";

export interface IGetUserController {
  handle(): Promise<HttpResponse<IUser[]>>;
}

export interface IGetUserRepository {
  getUsers(): Promise<IUser[]>;
}
