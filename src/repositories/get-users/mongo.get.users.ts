import { IGetUserRepository } from "../../controllers/get-users/protocols";
import { MongoClient } from "../../database/mongo";
import { IUser } from "../../models/user.model";

export class MongoGetUsersRepository implements IGetUserRepository {
  create(): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  async getUsers(): Promise<IUser[]> {
    const users = await MongoClient.db
      .collection<IUser>("users")
      .find({})
      .toArray();

    //tira a prop _id e coloca a prop id
    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
