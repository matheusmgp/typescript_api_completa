import { IUser } from "../../models/user.model";
import { HttpResponse } from "../protocols";
import { IGetUserController, IGetUserRepository } from "./protocols";

export class GetUserController implements IGetUserController {
  constructor(private readonly getUserRepository: IGetUserRepository) {}
  async handle(): Promise<HttpResponse<IUser[]>> {
    try {
      const users = await this.getUserRepository.getUsers();

      return {
        statusCode: 200,
        body: users,
      };
    } catch (err: any) {
      return {
        statusCode: 200,
        body: `Something went wronng -> ${err.message}`,
      };
    }
  }
}
