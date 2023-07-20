import { IUser } from "../models/user.model";
import { IBaseController } from "../repositories/interfaces/base.interface.controller";
import { HttpResponse } from "./protocols";
import { IUserRepository } from "../repositories/interfaces/user.interface.repository";

export class UserController implements IBaseController<IUser> {
  constructor(private readonly repository: IUserRepository<IUser>) {}
  async getAll(): Promise<HttpResponse<IUser[]>> {
    const result = await this.repository.getAll();
    return {
      statusCode: 200,
      body: result,
    };
  }
  async getById(id: string): Promise<HttpResponse<IUser>> {
    await this.repository.getById(id);
    return {
      statusCode: 200,
      body: "",
    };
  }
  async create(payload: IUser): Promise<HttpResponse<IUser>> {
    const result = await this.repository.create(payload);
    return {
      statusCode: 200,
      body: result,
    };
  }
  async update(id: string, payload: IUser): Promise<HttpResponse<IUser>> {
    await this.repository.update(id, payload);
    return {
      statusCode: 200,
      body: "",
    };
  }
}
