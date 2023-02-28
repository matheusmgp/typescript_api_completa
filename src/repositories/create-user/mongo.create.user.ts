import { ICreateUserRepository } from "../../controllers/create-user/protocols";
import { MongoClient } from "../../database/mongo";
import { IUser } from "../../models/user.model";

export class MongoCreateUserRepository implements ICreateUserRepository<IUser> {
  async create(payload: IUser): Promise<any> {
    const result = await MongoClient.db
      .collection<IUser>("users")
      .insertOne(payload);

    return await MongoClient.db
      .collection<IUser>("users")
      .findOne({ _id: result.insertedId });
  }
}
