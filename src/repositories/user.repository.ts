import { MongoClient } from "../database/mongo";
import { IUser } from "../models/user.model";
import { IUserRepository } from "./interfaces/user.interface.repository";

export class UserRepository implements IUserRepository<IUser> {
  async getAll(): Promise<IUser[]> {
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
  async getById(id: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  async create(payload: IUser): Promise<any> {
    console.log("payload", payload);
    const result = await MongoClient.db
      .collection<IUser>("users")
      .insertOne(payload);

    return await MongoClient.db
      .collection<IUser>("users")
      .findOne({ _id: result.insertedId });
  }
  async update(id: string, payload: IUser): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  funcaoUnicaDoUserRepository(): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
}
