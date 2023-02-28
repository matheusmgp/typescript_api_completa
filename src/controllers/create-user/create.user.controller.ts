import { IUser } from "../../models/user.model";
import { HttpResponse } from "../protocols";
import { ICreateUserController, ICreateUserRepository } from "./protocols";

export class CreateUserController implements ICreateUserController {
  constructor(
    private readonly createUserRepository: ICreateUserRepository<IUser>
  ) {}
  async handle(payload: IUser): Promise<HttpResponse<IUser>> {
    try {
      const created = await this.createUserRepository.create(payload);

      return {
        statusCode: 200,
        body: created,
      };
    } catch (err: any) {
      return {
        statusCode: 200,
        body: `Something went wronng -> ${err.message}`,
      };
    }
  }
}
